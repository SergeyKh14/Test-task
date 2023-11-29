export interface MenuItem {
  images: string[];
  title: string;
  categories?: string[];
  description: string;
}

export interface MediaItemProps extends MenuItem {}
