import { act, renderHook } from '@testing-library/react'
import { useCounter } from '../../src/hooks/index'

describe('Pruebas en el useCounter', () => {
    test('debe de retornar los valores por defecto', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, decrement, increment, reset } = result.current;
        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    })
    test('debe de generar el counter con el valor de 100', () => {
        const { result } = renderHook(() => useCounter(100));
        const { counter } = result.current;
        expect(counter).toBe(100);
    })
    test('debe de incrementar el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { increment } = result.current;
        act(() => {
            increment()
            increment(2)
        });
        expect(result.current.counter).toBe(13);
    })
    test('debe de decrementar el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { decrement } = result.current;
        act(() => {
            decrement()
            decrement(2)
        });
        expect(result.current.counter).toBe(7);
    })
    test('debe de resetear el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { decrement, reset } = result.current;
        act(() => {
            decrement(1)
            reset()
        });
        expect(result.current.counter).toBe(10);
    })
})