import dummyLoading from "Data/dummyLoading";
import loadAvatar from "Data/loadAvatar";
import loadSkills from "Data/loadSkills";
import React, {createContext, FC, useContext, useEffect, useRef, useState} from "react";
import {TSkills} from "Types/Skills";


const LoadingController: FC<{ onLoaded: () => void }> = ({onLoaded, children}) => {
    const onLoadedRef = useRef(onLoaded);
    onLoadedRef.current = onLoaded;

    const [content, setContent] = useState<TLoadingContent | null>(null);

    useEffect(() => {

        const tasks: TLoadedContentTasks = {
            skills: loadSkills(),
            avatar: loadAvatar(),
            delay: dummyLoading(1800),
        };

        const entries = Object.entries(tasks);
        const mappedEntries = entries.map(
            ([name, task]) => (
                (async () => (
                    [name, await task] as [TLoadingContentNames, TLoadedContent]
                ))()
            )
        );

        Promise.all(mappedEntries).then((r) => {
            setContent(Object.fromEntries(r) as TLoadingContent);
        }).catch(() => {
            // todo

            setContent(null);
        });

    }, []);

    useEffect(() => {
        content && onLoadedRef.current()
    }, [content]);

    return (
        <LoadingContext.Provider value={content}>
            {children}
        </LoadingContext.Provider>
    );
}
export default LoadingController;


const LoadingContext = createContext<TLoadingContent | null>(null);

export type TLoadingContent = {
    avatar: string;
    skills: TSkills;
    delay: void;
}

export type TLoadingContentNames = keyof TLoadingContent;
export type TLoadedContent<N extends TLoadingContentNames = TLoadingContentNames> = TLoadingContent[N];
type TLoadedContentTasks = { [P in TLoadingContentNames]: Promise<TLoadedContent<P>> };

export function useLoadedContent(name: TLoadingContentNames): TLoadedContent<typeof name> | null {

    const content = useContext(LoadingContext);

    if (content === null) {
        throw new Error("Unavailable call 'useLoadedContent' while loading");
    }

    return content[name] ?? null;
}
