import { CategoryModel } from "./category-model.model";

export class NewsModel {
  id?: number;
  title?: string;
  subContent?: string;
  content?: string;
  imgSrc?: string;
  datePosted?: Date;
  category?: CategoryModel;
}
