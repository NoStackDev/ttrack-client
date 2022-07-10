interface planInterface {
  planName: string;
  cost: number;
  bias: boolean;
  features: string[];
}

const plans: planInterface[] = [
  {
    planName: "Basic",
    cost: 0,
    bias: false,
    features: [
      "Upto 4 collaborators",
      "Unlimited Shares",
      "Sector News",
      "Chat Support",
    ],
  },
  {
    planName: "Professional",
    cost: 50,
    bias: true,
    features: [
      "All basic feature",
      "Upto to 4 Collaborators",
      "Unlimited Shares",
      "Sector News",
      "Chat Support",
    ],
  },
  {
    planName: "Team",
    cost: 500,
    bias: false,
    features: [
      "All professional features",
      "Upto to 4 Collaborators",
      "Unlimited Shares",
      "Sector News",
      "Chat Support",
    ],
  },
];

export default plans;
