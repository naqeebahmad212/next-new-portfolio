import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role:string
    } & DefaultSession["user"];
  }
}

declare module '@ckeditor/ckeditor5-build-classic' {
  const ClassicEditorBuild: any;

  export = ClassicEditorBuild;
}