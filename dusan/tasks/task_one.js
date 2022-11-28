/**SECTION: Sitemap example */
//
// Based on post title, build a webpage urls map/schema in which a post title is a slug.
// Slug is a lower-case only, kebab-case style, no special characters string.
//
// Domain is:
//    www.join-the-javascript.club
// Port used for the website is: 6379
// URL structure should be:
//    {HYPERTEXT TRANSFER PROTOCOL SECURE SCHEME DECLARATION}{DOMAIN AND PORT}/{YEAR}/{MONTH}/{DAY}/{SLUG}
//
// Exam passing when:
//    1. All the valid posts are printed properly (use console.log)
//    2. isValidUrl function is passing through filter all the generated URLs
//
/**!SECTION */

/**SECTION: Task data */

const posts = [
    {
      id: 1,
      created_at: 1665739838,
      title: "Why do we want to learn javascript?",
      content:
        "I'm baby truffaut intelligentsia paleo, vinyl lo-fi venmo pitchfork. Photo booth sriracha JOMO intelligentsia quinoa asymmetrical. Activated charcoal cold-pressed man braid, raw denim messenger bag tote bag sartorial meditation literally you probably haven't heard of them. Raw denim hell of woke kombucha, twee hashtag lomo portland iPhone organic. Heirloom lyft cray messenger bag pour-over neutra bushwick austin before they sold out pabst gochujang offal art party. Fam synth normcore taiyaki bespoke.",
    },
    {
      id: 2,
      created_at: 1653186342,
      title: "JS best uses and advanced features",
      content:
        "Quinoa YOLO prism raclette pug lomo master cleanse cray chartreuse iceland crucifix venmo food truck. Yr vegan kickstarter, four loko fanny pack woke gentrify tacos viral waistcoat lumbersexual crucifix flexitarian. Pinterest craft beer waistcoat selvage neutra cronut kinfolk, flannel taxidermy mukbang occupy twee post-ironic bodega boys. Echo park cred af vegan, tbh single-origin coffee poutine prism fam leggings neutra pour-over VHS.",
    },
    {
      id: 3,
      created_at: 1644079038,
      title: "Why do we want to learn javascript?",
      content:
        "I'm baby truffaut intelligentsia paleo, vinyl lo-fi venmo pitchfork. Photo booth sriracha JOMO intelligentsia quinoa asymmetrical. Activated charcoal cold-pressed man braid, raw denim messenger bag tote bag sartorial meditation literally you probably haven't heard of them. Raw denim hell of woke kombucha, twee hashtag lomo portland iPhone organic. Heirloom lyft cray messenger bag pour-over neutra bushwick austin before they sold out pabst gochujang offal art party. Fam synth normcore taiyaki bespoke.",
    },
  ];
  
  /**!SECTION */
  
  /**SECTION: Bonus material */
  
  /**
   * Valid URL checker
   * @param {string} urlString
   * @returns
   */
  const isValidUrl = (urlString) => {
    var urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // validate protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%.~+]*)*" + // validate port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
  };
  
  /**!SECTION */
  
  /** SECTION:  Work area */
  
  // Your answer here. Delete this comment.
  
  /** !SECTION */
  