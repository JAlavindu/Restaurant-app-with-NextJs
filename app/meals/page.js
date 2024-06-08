import MealsGrid from '@/components/meals/meals-grid';
import classes from './page.module.css';
import Link from 'next/link';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

export const metadata = {
    title: 'All Meals',
    description: 'Delicious meals, shared by a food-loving community.',
  };

async function Meals(){
    const meals = await getMeals();
    return <MealsGrid meals={meals}/>
}

export default function MealsPage() {
    return (
        <>
        <header className={classes.header}>
            <h1>
                delicious meals, created <span className={classes.highlight}>by you</span>
            </h1>
            <p>choose your favourite</p>
            <p className={classes.ctv}>
                <Link href="/meals/share">
                    share your favourite recipe
                </Link>
            </p>
        </header>
        <main className={classes.main}>
            <Suspense fallback={<p className={classes.loading}>Loading...</p>}>
            <Meals/>
            </Suspense>
           
        </main>
        </>
    );
}