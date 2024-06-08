'use client'

import {useFormStatues} from 'react-dom'

export default function MealsFormSubmit() {
    const {pending} = useFormStatues();

    return <button disabled={pending}>{pending ? 'Subbmitting...': 'share meal'}</button>
}