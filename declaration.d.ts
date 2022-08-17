declare module 'querystring' {
    export function stringify(val: object): string
    export function parse(val: string): object
  }
  
  declare module "*.jpg" {
    const value: any;
    export = value;
  }
  
  declare module "*.jpeg" {
    const value: any;
    export = value;
  }
  
  declare module "*.gif" {
    const value: any;
    export = value;
  }
  
  declare module "*.png" {
    const value: any;
    export = value;
  }
  
  declare module "*.svg" {
    const value: any;
    export = value;
  }