// 业务场景：页面中发起请求，在请求过程中根据 loading 状态展示占位元素。
// 将上述页面逻辑封装为一个 Hooks
import { useCallback, useEffect, useRef, useState } from 'react';
import { useUpdateEffect } from 'ahooks'
type RequestFn<R, P extends any[]> = (...args: P) => Promise<R>;

interface Options<P extends any[]> {
    // auto - true 时，组件挂载时自动请求 
    auto?: boolean;
    // 自动请求时的默认参数
    defaultParams?: P;
    // 当 refreshDeps 变化时，重新发起请求
    refreshDeps?: any[];
}

interface ReturnType<R, P extends any[]> {
    // 请求返回结果
    data: R | undefined;
    // 请求状态
    loading: boolean;
    // 调用时发起新的请求
    run: RequestFn<R, P>;
}

export function useRequest<R, P extends any[]>(
    reqFn: RequestFn<R, P>,
    options: Options<P>,
): ReturnType<R, P> {

    const [data, setData] = useState<R | undefined>();
    const [loading, setLoading] = useState<boolean>(false);
    const { auto, defaultParams, refreshDeps } = options || {};
    const run = useCallback(async (...params: P): Promise<R> => {
        setLoading(true);
        try {
            const resData = await reqFn(...params);
            setData(resData);
            return resData;
        } finally {
            setLoading(false);
        }
    }, [reqFn]);
    //变化执行
    useEffect(() => {
        if (auto) {
            run(defaultParams);
        }
    }, [auto, defaultParams, ...refreshDeps || []]);

    //初始化
    return {
        data,
        loading,
        run
    };
}

// use example:
let depVal = 1
function dataReq(id: number, name: string) {
    return Promise.resolve({ id, name, depVal });
}

const { data, loading, run } = useRequest(dataReq, {
    auto: true,
    defautlParams: [1, 'a'],
    refreshDeps: [depVal]
});
// data - {id: 1, name: 'a', depVal: 1}
depVal = 2;
// data - {id: 1, name: 'a', depVal: 2}
run(2, 'b')
// data - {id: 2, name: 'b', depVal: 2}
depVal = 3;
// data - {id: 2, name: 'b', depVal: 3}