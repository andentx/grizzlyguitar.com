import { PackageIcon } from "@sanity/icons";
import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .id("root")
    .title("Content")
    .items([
      S.documentTypeListItem("aboutMainImage")
        .title("About Main Image")
        .icon(PackageIcon),
      S.documentTypeListItem("aboutQuestionsAndAnswers")
        .title("About Questions and Answers")
        .icon(PackageIcon),
      S.documentTypeListItem("aboutWhatIOffer")
        .title("About What I Offer")
        .icon(PackageIcon),
      S.divider(),
      S.documentTypeListItem("indexWhatWeDo")
        .title("What We Do")
        .icon(PackageIcon),
      S.documentTypeListItem("landingFeaturedCategories")
        .title("Landing Featured Categories")
        .icon(PackageIcon),
      S.divider(),
      S.documentTypeListItem("service").title("Service").icon(PackageIcon),
      S.documentTypeListItem("servicesMenuSection")
        .title("Services Menu Section")
        .icon(PackageIcon),
      S.divider(),
      S.documentTypeListItem("tools").title("Tools").icon(PackageIcon),
      S.divider(),
      S.documentTypeListItem("blogPost").title("Blog Post").icon(PackageIcon),
      S.divider(),
      S.documentTypeListItem("author").title("Author").icon(PackageIcon),
    ]);
