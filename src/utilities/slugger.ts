import slugify from "slugify";

export function slugger(text: string) {
  return slugify(text, {
    replacement: "-",
    remove: /[*+~\,.()'"!:@]/g,
    lower: true,
    trim: true,
  });
}
