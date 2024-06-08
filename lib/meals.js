import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs'

const db = sql('meals.db');

export async function getMeals() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    //throw new Error('Something went wrong!');
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug){
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal){
    const slug = slugify((meal.title), {lower: true});
    const instructions = xss(meal.instructions);

    const extension = meal.image.spilt('.').pop();
    const fileName = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`).write(meal.image);
    const buffer =await  meal.image.arrayBuffer()
    stream.write(Buffer.from.apply(bufferedImage), () => {
        if(err){
           throw new Error('Saving image failed')
        }
    })

    meal.image = `/images/${fileName}`;

    const stmt = db.prepare('INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) VALUES ( @title, @summary, @instructions, @creator,  @creator_email, @image,  @slug)');
    stmt.run(meal);
}

