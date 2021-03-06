/**
 * Helper Functions
 */

 /**
  * Used to get all unique tags for a particular page (landing, blog, etc)
  * @param { all edges from a graphql data query } data 
  * @param { if we only want tags from a particular category} currentCategory 
  */
 export function getAllTagsForSection(data=[], currentCategory=false) {
    const category = (currentCategory) ? currentCategory : null;
    console.log('...getAllTagsForSelection, category', category);
    const tagsForAllCategories = data.map((element) => {
        const categories = element.node.frontmatter.categories;
        const tags = element.node.frontmatter.tags;
        if (categories.includes(category) || category == null) {
          return tags;
        }
      });

      //flatten all tags
      const flattened_tagsForAllCategories = [].concat.apply([], tagsForAllCategories);

      //remove all nulls
      const filtered = flattened_tagsForAllCategories.filter(Boolean);

      // return a new unique set
      return Array.from(new Set(filtered));
 }