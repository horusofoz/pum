let pum = {
  scene: {
    setup: {
      expectation: [
        "Interrupted by a different scene prompt",
        "Scene complication",
        "Happens as expected",
        "Happens as expected",
        "Happens as expected",
        "Happens as expected",
        "Happens as expected",
        "Happens as expected",
        "Happens as expected",
        "Even better than expected",
      ],
      prompt: [
        "Scene complication",
        "Invoke scene catalyst",
        "Problem or challenge",
        "Risk about to trigger",
        "Opportunity to make a discovery",
        "Someone is there",
        "Consequence of your actions or presence",
        "Location specific event",
        "Discover enemy actions",
        "Face active opposition",
      ],
    },
    designer: {
      catalyst: [
        "History or past recalled",
        "Social event occurrence",
        "Setting aspect featured",
        "PCs backstories referred",
        "Location detail invoked",
        "Local faction activities",
        "An opportunity to trade",
        "Alternative route found",
        "Find something of use",
        "Call character strengths",
        "It's about to happen",
        "Be summoned or called",
        "An esoteric occult event",
        "Someone else's troubles",
        "Impacts of remote event",
        "Test for keen senses",
        "Change in environment",
        "Route or path blocked",
        "Character flaws recalled",
        "A danger is nearby..",
      ],
      challenge: [
        "Having special tools or equipment helps",
        "Have to endure, resist or withstand",
        "Strength, force or power can be of help",
        "Things here may take long time to solve",
        "Presence of magic, divine or technology",
        "Room for hidden things or intentions",
        "An element is hard to reach out or get",
        "Something only a specialist can do",
        "Presence of guards, sentinels or security",
        "Have sanity, spirit or willpower tested",
        "Something to crack, unlock or enable",
        "Something needs protection or care",
        "Magic or superpowers would be helpful",
        "Driving, piloting, handling to be done",
        "Charisma or a strong personality can help",
        "Requires keen senses or extreme intuition",
        "Something only for experts to understand",
        "Could use a soft hand, empathy or wisdom",
        "Something is broken, damaged or failing",
        "Confronting or fighting might be one way",
      ],
      circumstance: [
        "There is more trouble than expected",
        "Presence of special equipment or feats",
        "Deception, hazards or traps are laid out",
        "Information or knowledge is missing",
        "There is elevation or vertical terrain",
        "Location is dangerous or problematic",
        "Someone supporting from a distance",
        "Unexpected help or support is arriving",
        "Something needs to be done in parallel",
        "Time limit or intense pressure",
        "Presence of innocents or bystanders",
        "Location is moving or unstable",
        "There are atmospheric difficulties",
        "Tactical devices may be utilized",
        "Vehicle or machine can be utilized",
        "May have secret passages or routes",
        "Hidden presence sneaking or watching",
        "Willpower, spirit or faith is needed",
        "Strength, power or might is needed",
        "Intellect, resolve or presence is needed",
      ],
      complication: [
        "Missing, Lost, Forgotten",
        "Delicate, Dangerous, Sensitive",
        "Blocked, Hidden, Trapped",
        "Problematic, Disastrous, Rebelled",
        "Dead, Destroyed, Unrecoverable",
        "Broken, Damaged, Injured",
        "Flooded, Overloaded, Exceeded",
        "Sabotaged, Captured, Taken",
        "Corrupted, Twisted, Cursed",
        "False, Fake, Corrupt, Concealed",
        "Mistaken, Discarded, Wrong",
        "Leaked, Discovered, Revealed",
        "Unreliable, Erratic, Insufficient",
        "Disrupted, Modified, Altered",
        "Concerning, Unsettling, Feared",
        "Useless, Abandoned, Obsolete",
        "Sick, Hazardous, Weak, Incapable",
        "Prepared, Defended, Ready",
        "Unprepared, Unarmed, Surprised",
        "Delayed, Late, Hindered",
      ],
      discovery: [
        "Answer one open question",
        "Meet or learn of someone",
        "Useful object or resource",
        "New way of solving thread",
        "Learn enemy secret or plan",
        "Learn more about enemy",
        "Learn about a location",
        "Improve a relationship",
        "Confirm a hope or theory",
        "Progress or solve thread",
      ],
      risk: [
        "Lose a trace or waste time",
        "Compromise someone else",
        "Lose or sacrifice something",
        "Take harm or risk own object",
        "Expose weaknesses or plans",
        "Give enemy advantage",
        "Confirm a concern",
        "Harm a relationship",
        "Fight or get captured",
        "Fight or be killed",
      ],
      subject: [
        "Enemy",
        "Faction",
        "Plan",
        "Target",
        "Location",
        "Ally",
        "Being",
        "Object",
        "Information",
        "Ability",
      ],
    },
  },
  oracle: {
    yesorno: {
      even: [
        "Don't know",
        "Hard to say",
        "No",
        "No",
        "No",
        "No",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
      likely: [
        "Hard to say",
        "Don't know",
        "No",
        "No",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
        "Yes",
      ],
      unlikely: [
        "Don't know",
        "Hard to say",
        "No",
        "No",
        "No",
        "No",
        "No",
        "No",
        "Yes",
        "Yes",
      ],
      modifier: [
        ", possibly.",
        ", for now.",
        ", but...",
        ".",
        ".",
        ".",
        ".",
        ", and...",
        ", unless...",
        ", obviously.",
      ]
    },
    what: {
      type: [
        "Known",
        "Sensitive",
        "Conflicting",
        "Valuable",
        "Surprising",
        "Personal",
        "Dangerous",
        "Own",
        "Secretive",
        "Unique",
      ],
      subject: [
        "Weakness",
        "Event",
        "Result",
        "Backstory",
        "Location",
        "Politics",
        "Business",
        "Encounter",
        "Decision",
        "Request",
      ],
      event: [
        "Sabotaged",
        "Exposed",
        "Discovered",
        "Opposed",
        "Destroyed",
        "Hindered",
        "Observed",
        "Removed",
        "Established",
        "Exploited",
      ],
    },
    who: {
      subject: [
        "An unimportant",
        "A strange",
        "A local",
        "An old",
        "A family related",
        "A scared",
        "An angry",
        "A desperate",
        "A powerful",
        "An important",
      ],
      type: [
        "ally",
        "ally",
        "ally",
        "person",
        "person",
        "person",
        "being",
        "enemy",
        "enemy",
        "enemy",
      ],
    },
    intent: {
      they: [
        "Fight",
        "Oppose",
        "Demand",
        "Request",
        "Need",
        "Offer",
        "Explain",
        "Join",
        "Trade",
        "Help",
      ],
      subject: [
        "enemies",
        "allies",
        "cause",
        "situation",
        "object",
        "location",
        "information",
        "plans",
        "resources",
        "power",
      ],
    },
    activity: {
      they: [
        "Claiming",
        "Supporting",
        "Searching",
        "Preparing",
        "Hindering",
        "Holding",
        "Requesting",
        "Controlling",
        "Attacking",
        "Expelling",
      ],
      subject: [
        "business",
        "authority",
        "place",
        "faction",
        "someone",
        "defense",
        "knowledge",
        "words",
        "resources",
        "agreement",
      ],
    },
    reason: {
      action: [
        "Seek",
        "Recover",
        "Controlling",
        "Matter of",
        "Need",
        "Eradicate",
        "Deal with",
        "Desire",
        "Secure",
        "Prevent",
      ],
      motive: [
        "power or status",
        "revenge or a debt",
        "glory or reputation",
        "chaos or destruction",
        "culture or history",
        "knowledge or interest",
        "contract or an order",
        "justice or rights",
        "safety or survival",
        "resources or wealth",
      ],
    },
    describe: {
      adverb: [
        "Curiously",
        "Specially",
        "Defensively",
        "Knowlingly",
        "Strongly",
        "Legally",
        "Actively",
        "Commonly",
        "Mostly",
        "Incredibly",
      ],
      area: [
        "Ruined",
        "Ancient",
        "Abandoned",
        "Dangerous",
        "Empty",
        "Unusual",
        "Secure",
        "Crowded",
        "Fancy",
        "Fortified",
      ],
      someone: [
        "Injured",
        "Clever",
        "Hunted",
        "Dangerous",
        "Skilled",
        "Exotic",
        "Innocent",
        "Famous",
        "Rich",
        "Powerful",
      ],
      object: [
        "Broken",
        "Antique",
        "Forbidden",
        "Dangerous",
        "Mundane",
        "Rare",
        "Harmless",
        "Legendary",
        "Valuable",
        "Reinforced",
      ],
    },
    kind_of: {
      item: [
        "Healing",
        "Deadly",
        "Ingest",
        "Protect",
        "Mystic",
        "Tech",
        "Historic",
        "Divine",
        "Move",
        "Static",
      ],
      ability: [
        "Absorb",
        "Harmful",
        "Utility",
        "Elemental",
        "Enhance",
        "Natural",
        "Weaken",
        "Tiring",
        "Healing",
        "Support",
      ],
      people: [
        "Fighter",
        "Medical",
        "Civilian",
        "Scavenger",
        "Academic",
        "Faithful",
        "Powerful",
        "Craftsmen",
        "Wealthy",
        "Enforcing",
      ],
      enemy: [
        "Agile",
        "Defend",
        "Sneaky",
        "Native",
        "Smart",
        "Magical",
        "Animal",
        "Artificial",
        "Gigantic",
        "Horrible",
      ],
      danger: [
        "Trap",
        "Explode",
        "Corrode",
        "Terrain",
        "Enemy",
        "Run",
        "Secret",
        "Sound",
        "Damage",
        "Hide",
      ],
    },
  },
};
