export interface Item {
  _id?: number;
  title?: string;
  subtitle?: string;
  short_description?: string;
  long_description?: string;
  rating?: number;
  type?: string;
  saved?: boolean,
  favorited?: boolean,
  tags?: any,
  category?: any,
  author_id?: string;
  images?: any[];
  link?: string;
  created_date?: Date,
  updated_date?: Date,
}
