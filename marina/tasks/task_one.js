/**SECTION: Email list compiler per plan tier */
// Get me a list of user emails that have premium subscription programatically
//
// Exam passing when:
//    1. An array of user emails is properly generated
//
/**!SECTION */

/**SECTION: Task data */
const SUBSCRIPTION_TIERS = {
    FREE: "free",
    ADVANCED: "advanced",
    PREMIUM: "premium",
  };
  
  const PACKAGES = {
    SEE_ALL: "see_all",
    READ_ALL: "read_all",
    WRITE_SOME: "write_some",
  };
  
  const users = [
    {
      email: "Petar",
      name: "petar@example.com",
      plan: {
        inactiveSubscriptions: ["premium"],
        activeSubscriptions: ["free", "advanced"],
      },
      enabledPackages: ["see_all", "write_some"],
    },
    {
      email: "Nikolina",
      name: "nikolina@example.com",
      plan: {
        inactiveSubscriptions: ["free", "advanced"],
        activeSubscriptions: ["premium"],
      },
      enabledPackages: ["write_some"],
    },
    {
      email: "David",
      name: "david@example.com",
      plan: {
        inactiveSubscriptions: ["free", "premium"],
      },
      enabledPackages: ["see_all"],
    },
    {
      email: "Tijana",
      name: "tijana@example.com",
      plan: {
        inactiveSubscriptions: ["free", "premium"],
        activeSubscriptions: ["advanced"],
      },
      enabledPackages: ["see_all", "read_all", "write_some"],
    },
    {
      email: "Igor",
      name: "igor@example.com",
      plan: {
        activeSubscriptions: ["advanced", "premium", "free"],
      },
      enabledPackages: ["see_all", "read_all", "write_some"],
    },
  ];
  /**!SECTION */
  
  /** SECTION:  Work area */
  
  // Your answer here. Delete this comment.
  
  /** !SECTION */
  