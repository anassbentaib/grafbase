import { g, auth, config } from "@grafbase/sdk";

const User = g.model("User", {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarURL: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  LinkdInUrl: g.url().optional(),
  projects: g.relation(()=>Projects).list().optional(),
});

const Projects = g.model("Projects", {
  titel: g.string().length({ min: 3 }),
  description: g.string().optional(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  categorie: g.string().search(),
  createdBy: g.relation(() => User),
});

export default config({
  schema: g,
});
