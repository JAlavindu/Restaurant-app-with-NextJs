import classes from './meals-loading.module.css';

export default function MealsLoading() {
    return (
        <div>
            <p className={classes.loading}>Loading...</p>
        </div>
    );
}   