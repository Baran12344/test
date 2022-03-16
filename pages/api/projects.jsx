export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://media.discordapp.net/attachments/737348411568685066/953718636458180618/images.png",
      name: "Hydra.M Bot",
      description:
        "Kendi discord sunucunuzda kullana bileceğiniz türkçe ve ingilizce dil destekli mükemmel müzik botu.",
      link: "https://discord.com/oauth2/authorize?client_id=746109878149447771&permissions=8&scope=bot",
    },
  ];
  res.status(200).json(data);
};
