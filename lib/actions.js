'use server'

import { saveMeal } from "./meals";
import { redirect } from 'next/navigation';

function isInvalidText(text){
    return !text || text.trim() === '';
}

export async function shareMeal(prevState, formData){
    const meal = {
        name: formData.get('name'),
        email: formData.get('email'),
        summary: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        email: formData.get('email'),
    };

    if(isInvalidText(meal.name)|| 
      isInvalidText(meal.email) ||
      isInvalidText(meal.summary) ||
      isInvalidText(meal.image) ||
      isInvalidText(meal.creator) ||
      isInvalidText(meal.email) ||
      !meal.creator_email.includes('@') ||
      !meal.creator_email.includes('.') ||
      !meal.image || meal.image.size === 0
    ){
        //throw new Error('Invalid input');
        return {
            message: 'Invalid input',
        }
    }

    await saveMeal();
    revalidate('/meals')
    redirect('/meals');

}