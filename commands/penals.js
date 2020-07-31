const Discord = require("discord.js");

module.exports = {
  name: "penals",
  async run(bot, message, args) {
    message.delete();

    let noargs = new Discord.MessageEmbed()
      .setTitle("Penal Codes")
      .setColor("#0000FF")
      .addField(
        "**Title 1.** Crimes Against The Person (PC 1-01 to PC 1-13)",
        "```(1)01.Intimidation, (1)02.Assault, (1)03.Assault-On-A-Peace-Officer, (1)04.Assault-With-A-Deadly-Weapon, (1)05.Mutual-Combat, (1)06.Battery, (1)07.Aggravated-Battery, (1)08.Attempted-Murder, (1)09.Manslaughter, (1)10.Murder, (1)11.False-Imprisonment, (1)12.Kidnapping,(1)13.Mayhem, (1)14.Vehicular-Murder, (1)15. Racketeering```"
      )
      .addField(
        "**Title 2.**  Crimes Against Property And Criminal Profiteering (PC 2-01 to PC 2-17)",
        "```(2)01.Arson, (2)02.Trespassing, (2)03.Trespassing-within-a-Restricted-Zone, (2)04.Burglary, (2)05.Possession-Of-Burglary-Tools, (2)06.Robbery, (2)07.Armed-Robbery, (2)08.Petty-Theft, (2)09.Theft, (2)10.Grand-Theft, (2)11.Grand-Theft-Auto, (2)12.Grand-Theft-Of-A-Firearm, (2)13.Receiving-Stolen-Property, (2)14.Extortion, (2)15.Forgery, (2)16.Fraud, (2)17.Vandalism```"
      )
      .addField(
        "**Title 3.** Crimes Against Public Decency (PC 3-01 to PC 3-10)",
        "```(3)01.Lewd-Or-Dissolute-Conduct-In-Public, (3)02.Indecent-Exposure, (3)03.Prostitution, (3)04.Solicitation-of-Prostitution, (3)05.Pandering-Pimping, (3)06.Sexual-Assault, (3)07.Sexual-Battery, (3)08.Rape, (3)09.Statutory-Rape, (3)10.Stalking```"
      )
      .addField(
        "**Title 4.** Crimes Against Public Justice (PC 4-01 to PC 4-24)",
        "```(4)01.Bribery, (4)02.Failure-To-Pay-A-Fine, (4)03.Contempt-of-Court, (4)04.Subpoena-Violation, (4)05.Dissuading-A-Witness-Or-Victim, (4)06.False-Information-To-A-Government-Employee, (4)07.Filing-A-False-Complaint, (4)08.Perjury, (4)09.Failure-To-Identify-To-A-Peace-Officer, (4)10.Impersonation-Of-A-Government-Employee, (4)11.Impersonation-of-an-Individual, (4)12.Obstruction-Of-A-Government-Employee, (4)13.Resisting-A-Peace-Officer, (4)14.Escape-From-Custody, (4)15.Escape, (4)16.Prisoner-Breakout, (4)17.Human-Trafficking, (4)18.Misuse-Of-A-Government-Hotline, (4)19.Tampering-With-Evidence, (4)20.Introduction-Of-Contraband, (4)21.Violation-Of-Parole-Or-Probation, (4)22.Voter-Fraud-Voter-Pandering, (4)23.Corruption-Of-Public-Duty, (4)24.Corruption-Of-Public-Office, (4)25.Contempt-of-Senate ```"
      )
      .addField(
        "**Title 5.** Crimes Against Public Peace (PC 5-01 to PC 5-06) ",
        "```(5)01.Disturbing-The-Peace, (5)02.Unlawful-Assembly, (5)03.Incitement-To-Riot, (5)04.Vigilantism, (5)05.Terrorism```"
      )
      .addField(
        "**Title 6.** Of Crimes Against Public Health And Safety (PC 6-01 to PC 6-11)",
        "```(6)01.Possession-Of-A-Controlled-Substance, (6)02.Possession-Of-A-Controlled-Substance-With-Intent-To-Sell, (6)03.Possession-Of-Drug-Paraphernalia, (6)04.Maintaining-A-Place-For-The-Purpose-Of-Distribution, (6)05.Manufacture-Of-A-Controlled-Substance, (6)06.Sale-Of-A-Controlled-Substance, (6)07.Possession-Of-An-Open-Container, (6)08.Public-Intoxication, (6)09.Under-The-Influence-Of-A-Controlled-Substance, (6)10.Facial-Obstruction-While-Committing-A-Crime, (6)11.Possession-of-Marijuana```"
      )
      .addField(
        "**Title 7.** Crimes Against State Dependents (PC 7-01 to PC 7-05)",
        "```(7)01.Animal-Abuse-Cruelty, (7)02.Child-Abuse, (7)03.Sale-of-Alcohol-To-A-Minor, (7)04.Minor-Alcohol-Violation, (7)05.Possession-Of-Child-Pornography```"
      )
      .addField(
        "**Title 8.** Vehicular Offenses (PC 8-00 to PC 8-09)",
        "```(8)00.Limitations, (8)01.-Driving-With-A-Suspended-License, (8)02.Driving-Without-A-License, (8)02.Evading-A-Peace-Officer, (8)03.Evading-A-Peace-Officer-High-Performance-Vehicle, (8)04.Evading-A-Peace-Officer-Oversized-Vehicle, (8)05.Evading-A-Peace-Officer-Naval-Vessel, (8)06.Evading-A-Peace-Officer-Aircraft, (8)07.Flying-Without-A-Pilot's-License, (8)08.Hit-And-Run, (8)09.Hit-And-Run-Involving-Property-Damage```"
      )
      .addField(
        "**Title 9.** Control Of Deadly Weapons And Equipment  (PC 9-01 to PC 9-13)",
        "```(9)01.Possession-Of-An-Illegal-Blade, (9)02.Possession-Of-An-Unlicensed-Firearm, (9)03.Possession-Of-An-Illegal-Firearm, (9)04.Possession-Of-An-Assault-Weapon, (9)05.Unlicensed-Distribution-Of-A-Weapon, (9)06.Possession-Of-An-Explosive-Device, (9)07.Manufacture-or-Possession-of-an-Improvised-Device, (9)08.Possession-of-Weapons-With-Intent-To-Sell, (9)09.Possession-Of-Explosive-Devices-With-Intent-To-Sell, (9)11.Weapons-Discharge-Violation, (9)12.Drive-By-Shooting, (9)13.CCW-PF-Violation```"
      )
      .addField(
        "**Title 10.** Sentencing Enhancements (PC 10-00 to PC 10-07)",
        "```(10)00.Exception, (10)01.Attempt, (10)02.Conspiracy, (10)03.Soliciting, (10)04.Government-Worker-Clause, (10)05.Plea-Bargaining-Police-Compliance-Clause, (10)06.Three-strikes-Vehicle-Policy, (10)07.Criminal-Accomplice-Clause```"
      )
      .addField(
        "**Title 11.** Road Law (PC 11-00 to PC 11-23)",
        "```(11)00.Limitations, (11)01.Speeding-Violation, (11)02.Failure-To-Abide-To-A-Traffic-Control-Device, (11)03.Yield-Violation, (11)04.Parking-Violation, (11)05.Reckless-Driving, (11)06.Vehicular-Endangerment, (11)07.Vehicular-Noise-Violation, (11)08.Illegal-Nitrous-Oxide-Possession, (11)09.Illegal-Usage-Of-Hydraulics, (11)10.Driving-While-Impaired-(DWI), (11)11.Driving-Under-The-Influence-(DUI), (11)12.Registration-Violation, (11)13.Unsafe-Usage-Of-A-Bicycle, (11)14.Street-Racing, (11)15.Driving-without-a-Valid-License, (11)16.Jaywalking, (11)17.Illegal-Parking-Of-An-Aircraft, (11)18.Tinted-Windows, (11)19.Illegal-Color-of-Underglow, (11)20.Unlawful-Transport-of-Persons-in-a-Cargo-Area, (11)21.Fire-Hydrant-Parking-Restriction, (11)22.Broken-Headlights-Tail-lights, (11)23.Unregistered-Vehicle```"
      )
      .addField(
        "**Title 12.** Code Policy (PC 12-01 to PC 12-18)",
        "```(12)01.Mistake-of-Fact, (12)02.Involuntary-Intoxication, (12)03.Private-Defense-Self-Defense-Castle-Doctrine-And-Defense-Of-Others, (12)04.Necessity, (12)06.Duress, (12)07.Parole-Exclusions, (12)08.Suspicion-Policy, (12)09.Officer-Discretion, (12)10.Good-Samaritan-Clause, (12)11.Imprisonment-Punishment-Criteria, (12)12.Maximum-Imprisonment, (12)13.Wiretapping-CCTV-Videotaping-Policy, (12)14.Police-Exigency-Hot-Pursuit-Policy, (12)15.Probable-Cause-Plain-View-Policy, (12)16.Criminal-Fines, (12)17.Repeat-Offender-Clause, (12)18.Immunity```"
      )
      .addField("**Usage:**", "E.G. !penal (1)01.Intimidation")
      .addField("**Prefix**", "!")
      .addField(
        "**Original link:**",
        "https://docs.google.com/document/d/1MhLSUncPfMTGKDytn4xbjam3o6NYRkgOFc2KC_szcXo/"
      )
      .setFooter(
        "If there's any error, faults or typos, DM CasperTheGhost#4546"
      )
      .setTimestamp();
    if (!args[0]) message.channel.send(noargs);
    if (args[0] == "(1)01.Intimidation") {
      let Intimidation = new Discord.MessageEmbed()
        .setTitle("(1)01.Intimidation")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who communicates to another that they will physically harm or kill such other, placing such other in a reasonable state of fear for their own safety — in person, writing, or through media.\n**2)** A person who communicates that they will physically harm or kill another person’s close friends or relatives — in person, writing, or through media. "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(Intimidation);
    } else if (args[0] == "(1)02.Assault") {
      let assault = new Discord.MessageEmbed()
        .setTitle("(1)02. Assault")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who intentionally puts another in the reasonable belief of imminent physical harm or offensive contact.\n\n- Penal Code (1)02 is a misdemeanor punishable by imprisonment of no less than 15 minutes and no more than 40 minutes.\n\n **NOTES:**  Assault is defined by distance the threats occur. Someone a few feet away threatening to harm or kill you at any moment is assault. Intimidation is less severe as there’s a distance that someone can escape through, or that the perpetrator has more time to reconsider the threat.       Any violent physical contact is considered to be battery, however grabbing someone during a threat may be either assault or battery, depending on intention and interpretation."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault);
    } else if (args[0] == "(1)03.Assault-On-A-Peace-Officer") {
      let assault2 = new Discord.MessageEmbed()
        .setTitle("(1)02. Assault On A Peace Officer")
        .setColor("#0000FF")
        .setDescription(
          "**1)**A person who attempts to harm or injure a Law Enforcement Officer, while doing their duties. \n\n Penal Code (1)03 is a felony punishable by imprisonment of no less than 40 minutes and no more than 1 hour and 20 minutes."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault2);
    } else if (args[0] == "(1)04.Assault-With-A-Deadly-Weapon") {
      let assault2 = new Discord.MessageEmbed()
        .setTitle("(1)02. Assault WIth A Deadly Weapon")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who attempts to harm or injure a Law Enforcement Officer, while doing their duties.\n\n - Penal Code (1)04 is a felony punishable by imprisonment of no less than 60 minutes and no more than 180 minutes."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault2);
    } else if (args[0] == "(1)05.Mutual-Combat") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(1)05. Mutual Combat")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who engages in mutual combat with another individual in an area accessible to the public, or in public view, regardless of the consent of the individuals involved. \n\n - Penal Code (1)05 is a misdemeanor punishable by imprisonment of no less than 30 minutes and no more than 60 minutes."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(1)06.Battery") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(1)06. Battery")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who uses intentional and unlawful force or violence to cause physical harm to another person. \n\n  - Penal Code (1)06 is a misdemeanor punishable by imprisonment of no less than 45 minutes and no more than 75 minutes."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(1)07.Aggravated-Battery") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(1)07. Aggravated Battery")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who uses great or continued force or violence against another person and causes severe harm. \n **2)** A person that uses a weapon, tool or other dangerous item to cause severe harm to a person(s). \n\n - Penal Code (1)07 is a felony punishable by imprisonment of no less than 60 minutes and no more than 240 minutes. \n - If a weapon is used and severe harm is inflicted on a person(s), the perpetrator shall receive the maximum sentence. \n\n **NOTES:** Aggravated Battery is the continued violence or battery against an individual, such as an ongoing fight or brawl, that doesn’t lead to severe bodily harm or life threatening injury."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(1)08.Attempted-Murder") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(1)08. Attempted Murder")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who deliberately and intentionally attempts to kill or cause life threatening harm to another person through premeditated actions. \n **2)** A person who, by criminal accident, negligence, or in the heat of passion, causes severe or life threatening bodily harm to another person. \n\n - Penal Code (1)08 is a felony punishable by no less than 330 minutes and no more than 510 minutes.\n- If occurring by accident, negligence, or in the heat of passion, the perpetrator shall receive the minimum sentence. \n\n **NOTES:** Attempted Murder is a catch-all for any action that leads to severe bodily harm. Its range in imprisonment is intended to account for when such severe harm is premeditated or accidental.For accidents and negligence there must be evidence of foul play, criminality in the instance, or some other factor beyond a truly accidental incident. For example, injuring someone while speeding or intoxicated.\n\n((Aggravated Battery is much less severe and would not, for example, leave someone in a coma or brutally wounded script-wise. There is however also no guarantee that being brutally wounded means attempted Murder as it depends on how the situation is RPed. ))"
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(1)09.Manslaughter") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(1)09. Manslaughter")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who unintentionally kills another, with or without a quarrel or heat of passion. \n **2)** A person who, through a criminal accident or negligence, causes someone's death. \n\n a) Vehicular Manslaughter - a person who unintentionally kills another with a land, air, and sea vehicles. \n\n- Penal Code (1)09 is a felony punishable by imprisonment of no less than 240 minutes and no more than 360 minutes.\n- If occurring by accident, negligence, or in the heat of passion, the perpetrator shall receive the minimum sentence.\n\n **NOTES:** Manslaughter is murder that is not premeditated or proven to have intent or an opportunity to pause and reflect on killing that person. An opportunity to reflect (and therefore possibly change your mind) demonstrates premeditation and is murder. Manslaughter is only charged in the penal code when some sort of criminal negligence or action can be proven. Killing someone while driving drunk is manslaughter. Accidentally killing someone who jaywalks outside of a crosswalk is not criminal. "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(1)10.Murder") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(1)10. Murder")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who unlawfully kills another with malice aforethought \n **2)** A person who commits murder while engaging in a felony offense that has been proven to be a premeditated act. \n\n - Penal Code (1)10 is a felony punishable by no less than 510 minutes imprisonment and no more than 660 minutes imprisonment. \n\n **NOTES:** Murder is defined clearly by a person’s premeditated forethought or plan to commit the murder. Manslaughter happens in a heat of passion, by criminal negligence or accident, or for some other incident that is not expected. The only exception to this is when someone commits a planned felony, such as planning to commit an arson. If someone dies as a result of the premeditated arson, it is no longer manslaughter and instead murder."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(1)11.False-Imprisonment") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(1)11. False Imprisonment")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who detains or arrests another without their consent (or the consent of their guardian) without premeditated intent or ransom for less than one hour. \n **2)** A person who performs an unlawful citizen’s arrest. \n\n - Penal Code (1)11 is a felony punishable by no less than 120 minutes imprisonment and no more than 270 minutes imprisonment.\n- If committed against a minor the perpetrator is punishable by the maximum sentence. \n\n **NOTES:** False Imprisonment is when someone is held against their will for less than one hour, without any premeditated intent (such as a plan to kidnap someone) or when there is no intention to ransom the individual.Citizens arrest is a limited tool (defined elsewhere in the penal code) to hold individuals while awaiting police custody. Doing this unlawfully is considered a False Imprisonment."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(1)12.Kidnapping") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(1)12. Kidnapping")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who detains or arrests another without their consent (or the consent of their guardian) with the premeditated intent to do so. \n **2)** A person who detains or arrests another without their consent (or the consent of their guardian) for more than one hour.\n **3)** A person who detains or arrests another without their consent (or the consent of their guardian) with the intent or decision to hold that individual for ransom of any kind.\n\n- Penal Code (1)12 is a felony punishable by no less than 270 minutes imprisonment and no more than 420 minutes imprisonment.\n - If committed against a minor the perpetrator is punishable by the maximum sentence. \n\n **NOTES:** Kidnapping is defined by a more egregious act of False Imprisonment. Kidnapping is when the False Imprisonment is premeditated or planned, done for ransom (any reward or action in return for the person’s safe return,) or for more than one hour, regardless of intent."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(1)13.Mayhem") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(1)13. Mayhem")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who intentionally causes extreme pain and suffering to a person, with or without permanent damage to the body. \n **2)** A person who causes pain and suffering for the purpose of revenge, extortion, persuasion, or for any sadistic purpose.\n **3)** A person who intentionally disfigures, disables, or aggressively destroys or damages a body part or area of a body or person’s body. \n\n - Penal Code (1)13 is a felony punishable by no less than 300 minutes imprisonment and no more than 450 minutes imprisonment.\n\n **NOTES:** Mayhem/Torture is in many ways a penal code entry to enhance other charges. Mayhem can be added to any change in an instance where the Mayhem took place while, or along with, the crime being committed. It is not automatically applied to charges that may be considered Mayhem (such as an Arson that leads to Murder) unless there is the demonstration of the perpetrator torturing someone specifically in that act of Arson. Ultimately it is up to the police to use this charge responsibly."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(1)14.Vehicular-Murder") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(1)14. Vehicular Murder ")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who, while operating a motor vehicle in a severely reckless and deliberate manner, causes someone's death. \n **2)** A person who while Evading Peace Officers in a motor vehicle, directly or indirectly causes someone's death.\n\n - Penal Code (1)14 is a felony punishable by no less than 510 minutes imprisonment and no more than 660 minutes imprisonment.\n- If occurring by accident, negligence, or in the heat of passion, the perpetrator shall receive the minimum sentence.\n\n **NOTES:** Vehicular Murder is only applicable if the individual driving the vehicle would have been reasonably aware of the fact that their driving, either due to its criminal intent (eluding police) or reckless nature, could feasibly cause great bodily injury or death to someone."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(1)15.Racketeering") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(1)15. Racketeering")
        .setColor("#0000FF")
        .setDescription(
          "**1)** Racketeering is the affiliation or association of an individual with a criminal organization, as prescribed by local or national law enforcement entities, with the evidence of the individual's attempts to commit extortion, bribery, murder, or other criminal activities while affiliated with said criminal organization.\n\n- Penal Code (1)15 is a felony punishable by imprisonment of no less than 20 minutes and must be submitted to trial for sentencing."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
      // TITLE 2 >
    } else if (args[0] == "(2)01.Arson") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(2)01. Arson")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who intentionally and maliciously sets fire to or burns any structure, forest land, or property without prior authorization. \n **2)** A person who intentionally aids, counsels, or helps facilitate the burning of any structure, forest land, or property without proper authorization.\n **3)** A person who, through criminal accident or negligence, causes a fire to burn any structure, forest land, or property.\n\n - Penal Code (2)01 is a felony punishable by no less than 50 minutes and no more than 240 minutes.\n - If occurring by accident or negligence, the perpetrator shall receive the minimum sentence.\n\n **NOTES:** Arson’s criminality is when someone intentionally creates or helps create a fire, as it can easily grow out of control and cause death. It is up to the Fire Marshal’s Office and investigating Law Enforcement Agency jointly to prove an arson was malicious and therefore criminal. Negligence or accident can be included if it is proven criminal in nature."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(2)02.Trespassing") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(2)02. Trespassing ")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who enters another’s property while it is closed or not in operation without the expressed or written permission to do so.\n **2)** A person who enters the restricted area of an open facility or property as defined and clearly marked by the property manager without the expressed or written permission to do so.\n **3)** This cannot stack with (2)03. Trespassing within a Restricted Zone.\n**4)** This crime cannot stack with any form of Burglary\n\n- Penal Code (2)02 is a misdemeanor punishable by $2,000 AND an imprisonment of 10 minutes. This falls under Officer Discretion.\n\n **NOTES:** Trespassing refers to anyone who is told to leave and refuses to do so, but lacks any intention of committing a crime or other malice aforethought or action. Burglary is a far more severe act of trespassing as it comes with evidence of criminal intent.\n\n If police close down a public space it is trespassing to enter that public space without their authorization. The same applies if a typically public space is temporarily closed.\n\nOwners of trailers or caravans may only consider their trailer or caravan their own property. The surrounding trailer park is not considered their own property when the area includes several other trailers and caravans that are not owned by one individual."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(2)03.Trespassing-within-a-Restricted-Zone") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(2)03. Trespassing within a Restricted Zone")
        .setColor("#0000FF")
        .setDescription(
          "**1)**A person who, without proper authorization, enters any government owned or managed facility, or restricted section in a government building that is secured with the intent of keeping non-authorized personnel out due to a security or safety hazard.\n **2)** This charge cannot stack with (2)02. Trespassing \n\n - Penal Code (2)03 is a misdemeanor punishable by no less than 30 minutes imprisonment and no more than 50 minutes imprisonment. This falls under Officer Discretion\n\n **NOTES:** As an example: areas of a police station that are restricted (i.e. armory, locker rooms, offices), trespassing inside the restricted areas of the Correctional Facility, trespassing inside restricted areas of a hospital (i.e. staff area of the pharmacy, surgery theatres when not permitted)."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(2)04.Burglary") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(2)04. Burglary")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who enters into the locked or restricted property of another without their permission with the intention of committing a crime, typically theft.\n **2)** This crime cannot stack with (2)02. Trespassing.\n\n - Penal Code (2)04 is a misdemeanor punishable by no less than 25 minutes and no more than 55 minutes imprisonment.\n\n **NOTES:** Burglary can include homes, apartments, offices, vehicles or any locked space with restricted access. Burglary is also committed irrelevant if any theft or other crime takes place. A less severe act of burglary is trespassing, which would account for instances where there is no intent to commit a crime, no locked door or other physical restriction."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(2)05.Possession-Of-Burglary-Tools") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(2)05. Possession Of Burglary Tools")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who has in their possession the appropriate combination of tools necessary to commit burglary, such as a tension bar, screwdriver, shimmy, or other appropriate items. \n\n - Penal Code (2)05 is an infraction of $3,000.\n\n **NOTES:** It must be demonstrated that the person has a certain combination of these tools or in an appropriate context that would assume their usage in burglary. Having a screwdriver is not punishable alone, but a screwdriver, along with a tension bar, is punishable."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(2)06.Robbery") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(2)06. Robbery")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who takes property from the possession of another against their will, by means of force or fear, such as through intimidation, assault or battery.\n **2)**This charge cannot stack with (2)07. Armed Robbery.\n\n - Penal Code (2)06 is a felony punishable by an addition of 120 minutes imprisonment to any charges associated with the robbery attempt.\n\n**NOTES:** Robbery stacks with any Title 1 crimes that are attempted during the Robbery. It cannot stack with Armed Robbery, which is when the force, intimidation, or fear involves a dangerous weapon."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(2)07.Armed-Robbery") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(2)07. Armed Robbery")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who takes property from the possession of another against their will, by means of force facilitated with a weapon or with an item used as a weapon.\n **2)** This charge cannot stack with (2)06. Robbery.\n\n - Penal Code (2)07 is a felony punishable by an addition of 180 minutes imprisonment to any charges associated with the armed robbery attempt.\n\n **NOTES:** Armed Robbery stacks with any Title 1 crimes that are attempted during the robbery. It cannot stack with Robbery."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(2)08.Petty-Theft") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(2)08. Petty Theft")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who steals or takes the personal property of another worth $2,500 or less.\n\n - Penal Code (2)08 is a misdemeanor punishable by no less than 20 minutes imprisonment and no more than 40 minutes imprisonment. This falls under Officer Discretion. "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(2)09.Theft") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(2)09. Theft ")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who steals or takes the personal property of another worth more than $2,500 but less than $10,000.\n\n - Penal Code (2)09 is a misdemeanor punishable by no less than 45 minutes imprisonment and no more than 90 minutes imprisonment. "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(2)10.Grand-Theft") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(2)10. Grand Theft")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who steals or takes the personal property of another worth $10,000 or more.\n\n- Penal Code (2)10 is a felony punishable by no less than 180 minutes imprisonment and no more than 270 minutes imprisonment."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(2)11.Grand-Theft-Auto") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(2)11. Grand Theft Auto")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who commits the theft of any vehicle, no matter the value.\n **2)** A person who illegally enters any parked vehicle’s driver seat.\n **3)** This charge cannot stack with any form of Trespassing or Burglary.\n\n - Penal Code (2)11 is a felony punishable by no less than 120 minutes imprisonment and no more than 180 minutes imprisonment.\n\n**NOTES:** Grand Theft Auto does stack with theft, but not burglary or trespassing. "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(2)12.Grand-Theft-Of-A-Firearm") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(2)12. Grand Theft Of A Firearm")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who commits theft of any firearm, no matter the value or whether it is registered.\n\n- Penal Code (2)12 is a felony punishable by no less than 180 minutes imprisonment and no more than 240 minutes imprisonment.\n\nNOTES: Grand Theft Of A Firearm does stack with Theft. "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(2)13.Receiving-Stolen-Property") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(2)13. Receiving Stolen Property")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who knowingly buys or receives any property that has been stolen or that has been obtained in any manner constituting theft or extortion.\n\n - Penal Code (2)13 is a misdemeanor punishable by no less than 25 minutes imprisonment and no more than 45 minutes imprisonment.\n\n **NOTES:** If an officer can prove that the individual should have known the item was stolen based on outside factors, such as the price or quality, or any sort of common knowledge, then the person can be charged."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(2)14.Extortion") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(2)14. Extortion")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who intimidates or influences another to provide or hand over properties or services.\n **2)**A person who utilizes or threatens their power or authority with demonstrated malice aforethought in order to compel action by another.\n **3)** A person who utilizes privileged information to intimidate another for certain property or services.\n\n - Penal Code (2)14 is a felony punishable by no less than 180 minutes imprisonment and no more than 300 minutes imprisonment.\n\n **NOTES:** Extortion depends on a person or organization using its authority, power, or influence to intimidate and threaten someone in return for property or services. Property may be demanding money to keep quiet or demanding a certain personal payment to prevent a strike.Extortion may serve in lieu of corruption depending on the circumstances, or if it involves a private organization.A union threatening a strike or collective worker action is NOT extortion unless a specific leader or member is being paid to influence union operations."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(2)15.Forgery") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(2)15. Forgery ")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who knowingly alters, creates, or uses a written document with the intent to defraud or deceive another.\n **2)** A person who knowingly signs a document or agreement, electronic or otherwise, without the consent or authority of whom they are signing for.\n\n - Penal Code (2)15 is a misdemeanor punishable by no less than 30 minutes imprisonment and no more than 60 minutes imprisonment. "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(2)16.Fraud") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(2)16. Fraud")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who intentionally misrepresents a matter of fact - whether by words or by conduct, by false or misleading allegations, or by concealment of what should have been disclosed - that deceives and is intended to deceive another so that such other will act upon it to their disadvantage.\n\n - Penal Code (2)16 is a felony punishable by no less than 60 minutes imprisonment and no more than 150 minutes imprisonment."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(2)17.Vandalism") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(2)17. Vandalism")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person that defaces, damages, or destroys property which belongs to another.\n\n- Penal Code (2)17 is a misdemeanor punishable by imprisonment of no less than 10 minutes and no more than 25 minutes. This falls under Officer Discretion. "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
      //TITLE 3 >
    } else if (args[0] == "(3)01.Lewd-Or-Dissolute-Conduct-In-Public") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(3)01. Lewd Or Dissolute Conduct In Public")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who solicits anyone to engage in inappropriate sexual or sexually suggestive conduct in any public place or in any place open to the public or exposed to public view.\n **2)** A person who engages in inappropriate sexual or sexually suggestive conduct in any public place or in any place open to the public or exposed to public view.\n **3)** A person who solicits sexual activity in a public place or any place open to public view.\n\n - Penal Code (3)01 is a misdemeanor punishable by no less than 10 minutes imprisonment and no more than 20 minutes imprisonment. This falls under Officer Discretion.\n\n **NOTES:** Lewd or Dissolute Conduct refers to actions that are not necessarily Indecent Exposure, but can presumably involve or lead to Indecent Exposure. Suggestive actions or gestures in bathroom stalls or other areas that are considered indecent but not naked or involve genitalia is Lewd Or Dissolute Conduct.This also applies for Indecent Exposure in areas like restrooms which involve your genitalia."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(3)02.Indecent-Exposure") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(3)02. Indecent Exposure")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who intentionally exposes their naked body or genitalia on public property or in the public area of a privately owned business.\n **2)** A person who intentionally exposes their naked body or genitalia on private property without permission of the property owner.\n **3)** A person who engages in sex or other sexual activity in a plia in the view of a minor.\n\n  - Penal Code(3)02 is a misdemeanor punishable by no less than 20 minutes imprisonment and no more than 40 minutes imprisonment. This falls under Officer Discretion.\n - If committed knowingly in the presence of a minor, the perpetrator shall receive the maximum sentence.\n\n NOTES: Private parties / reservations in public areas are considered public events that can be restricted and therefore permit naked bodies. It is when it is in a public area or exposed to children that it is indecent exposure. Genitalia does not include breasts. Assume below the belt exposure."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(3)03.Prostitution") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(3)03. Prostitution")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who knowingly engages in a sexual act in return for payment, goods, services or other items of value.\n\n - Penal Code (3)03 is a felony punishable by no less than imprisonment for 60 minutes imprisonment and no more than 120 minutes imprisonment.\n\n **NOTES:** Anyone who cannot be proven to commit prostitution may charged with Indecent Exposure or Lewd or Dissolute Conduct depending on the circumstances.The individual(s) performing the sexual acts in return for money, goods, services or other items of value are to be charged with prostitution"
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(3)04.Solicitation-of-Prostitution") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(3)04. Solicitation of Prostitution")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who offers payment, goods, services or other items of value to an individual in exchange for sexual acts.\n\n - Penal Code (3)04 is a felony punishable by no less than imprisonment for 60 minutes imprisonment and no more than 120 minutes imprisonment.\n\n **NOTES:** Anyone who cannot be proven to commit prostitution may charged with Indecent Exposure or Lewd or Dissolute Conduct depending on the circumstances. The individual(s) paying another person(s) money, goods, services or other items of value in exchange for a sexual act are to be charged with Solicitation of Prostitution."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(3)05.Pandering-Pimping") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(3)05. Pandering - Pimping")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who solicits or advertises, aids or provides transport or supervises persons involved in prostitution and retains some or all of the money earned.\n\n - Penal Code (3)05 is a felony punishable by no less than 90 minutes imprisonment and no more than 180 minutes imprisonment."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(3)06.Sexual-Assault") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(3)06. Sexual Assault")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who commits verbal abuse for the purpose of sexual arousal, gratification, or abuse.\n **2)** A person who threatens imminent harm or nonconsensual sexual contact or puts another under the belief of imminent harm or nonconsensual sexual contact.\n\n - Penal Code (3)06 is a misdemeanor punishable by no less than 25 minutes imprisonment and no more than 45 minutes imprisonment."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(3)07.Sexual-Battery") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(3)07. Sexual Battery")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who commits unwanted touching or sexual contact.\n **2)** A person who causes battery or similar aggressive physical contact for the purpose of sexual arousal, gratification, or abuse.\n\n- Penal Code (3)07 is a felony punishable by no less than 270 minutes imprisonment and no more than 300 minutes imprisonment. "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(3)08.Rape") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(3)08. Rape")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who forces another to engage in sexual intercourse.\n **2)** A person who performs non consensual sexual intercourse with another.\n **3)** A person who performs sexual intercourse with another who is incapacitated, disabled, or unable to give consent.\n\n- Penal Code (3)08 is a felony punishable by no less than 360 minutes imprisonment and no more than 720 minutes imprisonment. "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(3)09.Statutory-Rape") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(3)09. Statutory Rape")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who engages in mutually-interested sexual intercourse with another who is under the age of 18 and therefore cannot give legal consent.\n\n- Penal Code (3)09 is a felony punishable by no less than 300 minutes imprisonment and no more than 360 minutes imprisonment."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(3)10.Stalking") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(3)10. Stalking")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who intentionally and maliciously follows or harasses another person who has made it known that they do not consent to such following or harassment,\n **2)** A person who violates an official restraining order issued by a court.\n\n - Penal Code (3)10 is a felony punishable by no less than 150 minutes imprisonment and no more than 210 minutes imprisonment. \n- If the perpetrator violated a restraining order, they shall receive the maximum sentence."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
      //TITLE 4
    } else if (args[0] == "(4)01.Bribery") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(4)01. Bribery ")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who offers or gives a monetary gift, gratuity, valuable goods, or other reward to a public official, a government employee, or peace officer in an attempt to influence their duties or actions\n **2)** A person who gives services or nonmaterial, but valuable actions to a public official, a government employee, or peace officer in an attempt to influence their duties or actions.\n\n - Penal Code (4)01 is a felony punishable by no less than 180 minutes imprisonment and no more than 240 minutes imprisonment."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(4)02.Failure-To-Pay-A-Fine") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(4)02. Failure To Pay A Fine")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who fails to pay a fine or court-ordered fee within clearly stated and allotted time period.\n\n -Penal Code (4)02 is a misdemeanor punishable by 15 minutes imprisonment. This falls under Officer Discretion.\n\n **NOTES:** Arrest warrant applications for this charge can only be filed by the officer who issued the fine the person failed to pay, or by a Sergeant within their department. However, any officer may perform an arrest regardless of whether a warrant has been issued for this charge if they encounter an individual with an unpaid fine."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(4)03.Contempt-of-Court") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(4)03. Contempt of Court")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who willfully disobeys the verbal or written order of a court authority, disrespects the decorum of the court, or otherwise infringes upon due process.\n **2)** This charge can only be issued by a Judge or agent of a court. \n\n- Penal Code (4)03 is a misdemeanor punishable by no less than 15 minutes imprisonment and no more than 240 minutes imprisonment.\n\n **NOTES:** The Contempt of Court charge is an imprisonment set by a judge relative to a particular court case and the actions committed by the individual disobeying court orders and activities. This is different from (4)04. Subpoena Violation which has to do with official paperwork or documents. "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(4)04.Subpoena-Violation") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(4)04. Subpoena Violation")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who ignores or violates a subpoena order issued by the Courts.\n **2)** A person who ignores or violates a request by the courts to be present at a hearing.\n **3)** A person who ignores or disobeys an official document issuing orders or actions by a court.\n **4)** A person in violation of a court injunction or other government operation.\n\n - Penal Code (4)04 is a misdemeanor punishable by 30 minutes imprisonment."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(4)05.Dissuading-A-Witness-Or-Victim") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(4)05. Dissuading A Witness Or Victim")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who knowingly and maliciously prevents or encourages any witness or victim from attending or giving testimony at any trial, proceeding, or inquiry authorized by law with the use of bribery, fear, or other tactics.\n **2)** A person who prevents the distribution, completion, answering, or due process of an affidavit or other legal statement.\n\n - Penal Code (4)05 is a felony punishable by no less than 210 minutes imprisonment and no more than 300 minutes imprisonment."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(4)06.False-Information-To-A-Government-Employee") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(4)06. False Information To A Government Employee")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who provides false information or details to a police officer during the course of a criminal investigation or lawful detainment.\n **2)** A person who provides knowingly inaccurate data to a government employee investigating in some official capacity.\n **3)** This charge also covers when a civilian files a false Police report against another person(s).\n **4)** This charge cannot stack with __(4)08. Perjury.__\n\n - Penal Code (4)06 is a misdemeanor punishable by no less than 35 minutes imprisonment and no more than 45 minutes imprisonment. This falls under Officer Discretion."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(4)07.Filing-A-False-Complaint") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(4)07. Filing A False Complaint")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who knowingly files a false complaint, statement, document, or representation with any organization regarding the conduct, job performance, or behavior of a public official or employee for the purpose of initiating false administrative action against that official.\n\n - Penal Code (4)07 is a misdemeanor punishable by imprisonment of no less than 25 minutes and no more than 35 minutes. This falls under Officer Discretion."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(4)08.Perjury") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(4)08. Perjury")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who knowingly provides false information while under oath in a court of law\n **2)** A person who knowingly provides false information as part of an affidavit, testimony, court-ordered deposition, or document with a statement signifying its authenticity under penalty of perjury.\n**3)** This charge cannot stack with __(4)06. False Information To A Government Employee.__\n\n- Penal Code (4)08 is a felony punishable by no less than 90 minutes imprisonment and no more than 120 minutes imprisonment. "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(4)09.Failure-To-Identify-To-A-Peace-Officer") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(4)09. Failure To Identify To A Peace Officer")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who, while being detained or under arrest by a peace officer, fails to provide a peace officer or other legal authority their name as it appears on an I.D. card or other identifiable information for MDC purposes.\n\n - Penal Code (4)09 is a misdemeanor punishable by no less than 10 minutes and no more than 15 minutes imprisonment. This falls under Office Discretion.\n\n  **NOTES:**As per (12)11. Maximum Imprisonment someone who fails to identify and provide a way to properly charge them will be imprisoned 900 minutes until they identify themselves, after which this charge, plus all applicable charges, can be placed on their record and their sentence adjusted."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(4)10.Impersonation-Of-A-Government-Employee") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(4)10. Impersonation Of A Government Employee")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who pretends or implies the role of a government worker, such as a peace officer, paramedic, tax collector, federal investigator, or other official.\nA person who wears an official or realistic government employee uniform with an official or realistic badge or identification tag except on an official, legally sanctioned movie or production set.\nA person who claims to be a government worker in order to deceive or take advantage of another individual or organization.\n\n  - Penal Code (4)10 is a misdemeanor punishable by no less than 75 minutes imprisonment and no more than 95 minutes imprisonment. "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(4)11.Impersonation-of-an-Individual") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(4)11. Impersonation of an Individual")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who pretends or implies the role of another individual. \n - Penal Code (4)11 is a misdemeanor punishable by no less than 60 minutes imprisonment and no more than 75 minutes imprisonment. "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(4)12.Obstruction-Of-A-Government-Employee") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(4)12. Obstruction Of A Government Employee")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who shows a clear and motivated attempt to prevent a government employee from conducting their duties.\n **2)** A person who fails to comply with an officer's lawful orders.\n **3)** A person who, after being issued a ticket, citation, or infraction, continues to violate such law and ignore an officer’s orders.\n **4)** A person who enters a crime scene after being told to stop and turn away by a Peace Officer.\n\n- Penal Code (4)11 is a misdemeanor punishable by no less than 20 minutes imprisonment and no more than 30 minutes imprisonment.\n\n **NOTES:** A government employee would need to contact a peace officer to get the charge of Obstruction issued. "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(4)13.Resisting-A-Peace-Officer") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(4)13. Resisting A Peace Officer")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who avoids apprehension from an officer by non-vehicular means or resists apprehension by any physical means.\n **2)** This charge does not include the attempt to flee and evade by vehicular means, which is (8)02. Evading a Peace Officer.\n\n- Penal Code (4)12 is a misdemeanor punishable by no less than 25 minutes imprisonment and no more than 45 minutes imprisonment. This falls under Officer Discretion. "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(4)14.Escape-From-Custody") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(4)14. Escape From Custody")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who has been physically detained by use of restraints or physical force by a peace officer and escapes from said Peace Officer’s personal custody, resulting in a warrant or APB being needed to apprehend the suspect.\n **2)** Until a warrant or APB is placed, this incident is classified as (4)12. Resisting a Peace Officer.\n **3)** (( If a person quits during an arrest, they may be charged with Escape From Custody at admin discretion. ))\n\n- Penal Code (4)13 is a felony punishable by 100 minutes imprisonment in addition to any outstanding charges on an individual who commits an escape."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(4)15.Escape") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(4)15. Escape")
        .setColor("#0000FF")
        .setDescription(
          "**1)** Any person arrested, booked, charged, or convicted of any crime who thereafter escapes from a county or city jail, prison, community service, or custody of a Correctional or Parole Officer.\n\n - Penal Code (4)14 is a felony punishable by an additional 240 minutes imprisonment to any outstanding charges on an individual who commits an escape."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(4)16.Prisoner-Breakout") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(4)16. Prisoner Breakout")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who directly aids or assists an inmate with escaping from the law, including the lawful custody of a peace officer, prisoner transport, parole, community service, or incarceration in a county jail or state prison.\n A person who provides information or insights that subsequently assist an inmate with escaping from the law.\n\n - Penal Code (4)15 is a felony punishable by 180 minutes imprisonment."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(4)17.Human-Trafficking") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(4)17. Human Trafficking")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who intentionally smuggles non-citizens into the state without proper visas and authorization.\n **2)** A person who intentionally restricts another’s liberty with intent for forced labor or sex trafficking, or other forced activities.\n **3)**This charge does not stack with __(1)10. Kidnapping__ \n\n - Penal Code (4)16 is a felony punishable by no less than 300 minutes imprisonment and no more than 360 minutes imprisonment."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(4)18.Misuse-Of-A-Government-Hotline") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(4)18. Misuse Of A Government Hotline")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who uses an emergency government hotline for any purpose other than an emergency situation which involves a life-or-death request for assistance or other purposes dictated by the hotline managers.\n **2)** A person who uses any non-emergency or public hotline for purposes irrelevant to that particular government office, department, or agency.\n **3)**A person who performs prank calls, fake calls, or tries to incite mayhem through public government lines\n\n  - Penal Code (4)17 is a misdemeanor punishable by no less than 10 minutes imprisonment and no more than 20 minutes imprisonment. This falls under Officer Discretion."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(4)19.Tampering-With-Evidence") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(4)19. Tampering With Evidence")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who destroys or attempts to destroy, conceal, or alter any evidence that can later potentially be used in a criminal investigation or court proceeding.\n\n - Penal Code (4)18 is a felony punishable by no less than 120 minutes imprisonment and no more than 180 minutes imprisonment."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(4)20.Introduction-Of-Contraband") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(4)20. Introduction Of Contraband")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who provides contraband to an inmate of a correctional facility, or attempts to enter a facility with the intent to illegally transport contraband within it.\n\n - Penal Code (4)19 is a felony punishable by no less than 100 minutes imprisonment and no more than 150 minutes imprisonment."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(4)21.Violation-Of-Parole-Or-Probation") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(4)21. Violation Of Parole Or Probation")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who willfully violates the terms of a probation or parole agreement.\n\n - Penal Code (4)20 is a felony punishable by an extension of 180 minutes imprisonment in addition to the inmate’s current sentence. This falls under discretion of the parole officer."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(4)22.Voter-Fraud-Voter-Pandering") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(4)22. Voter Fraud - Voter Pandering")
        .setColor("#0000FF")
        .setDescription(
          "**1)** An individual who dissuades or influences official voting outcomes through illicit, illegal, or unethical manners.\n\n - Penal Code (4)21 is a felony punishable by no less than 60 minutes imprisonment and no more than 120 minutes imprisonment."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(4)23.Corruption-Of-Public-Duty") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(4)23. Corruption Of Public Duty")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A government employee who acts outside the interests of the public good or public justice.\n **2)** A government employee who demonstrates criminal negligence in their duties.\n **3)** A government employee convicted by the Department of Justice for committing a felony while on duty. \n\n - Penal Code (4)22 is a felony punishable by no less than 240 minutes imprisonment and no more than 300 minutes imprisonment."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(4)24.Corruption-Of-Public-Office") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(4)24. Corruption Of Public Office")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who acts outside the interests of the public good, public justice, or duties of those in public office.\n\n - Penal Code (4)23 is a felony punishable by no less than 300 minutes imprisonment and no more than 360 minutes imprisonment."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(4)25.Contempt-of-Senate") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(4)25. Contempt of Senate")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who willfully disobeys the verbal or written order of the Senate, disrespects the decorum of the Senate, or otherwise infringes upon any senate process.\n **2)** This charge can only be issued by Senator or Judge.\n\n - Penal Code (4)24 is a misdemeanor punishable by no less than 15 minutes imprisonment and no more than 240 minutes imprisonment.\n\n **NOTES:** Decorum would mean internationally or unintentionally interrupting or making any loud noise while the Senate is in process."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
      //TITLE 5
    } else if (args[0] == "(5)01.Disturbing-The-Peace") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(5)01. Disturbing The Peace")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who creates a dangerous or intimidating situation in a public place or in the public area of private property.\n **2)** A person who attempts to provoke, incite, or promote harm to another person through gestures, language, claims, actions, or other methods.\n **3)** A person whose profanity, language, voice, or noise reasonably disturbs nearby civilians or intends to incite violence.\n\n - Penal Code (5)01 is a misdemeanor punishable by no less than 15 minutes imprisonment and no more than 25 minutes imprisonment. This falls under Officer Discretion."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(5)02.Unlawful-Assembly") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(5)02. Unlawful Assembly")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who refuses to leave public property after being ordered to do so by its state agency property manager or a peace officer.\n **2)** A person who refuses to leave the scene of a crime or other area after being ordered to so whose presence could hinder police operations.\n **3)** A group that fails to protest or demonstrate peacefully in a designated “free speech zone” or without proper permits or authorization from the city.\n **4)** A person who refuses to leave private property they were invited to access after being instructed to do so by the property owner or manager.\n  **5)** This charge cannot stack with Trespassing of any kind.\n\n - Penal Code (5)02 is a misdemeanor punishable by no less than 20 minutes imprisonment and no more than 35 minutes imprisonment. This falls under Officer Discretion."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(5)03.Incitement-To-Riot") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(5)03. Incitement To Riot ")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person whose actions deliberately agitates or intends to agitate a crowd or large group of people organized or located peacefully in a public or private area in order to promote acts of violence or civil unrest.\n **2)** A group of people who could be reasonably identified by a peace officer to be gang members whose actions in a public area intend to incite violence, encourage mayhem, or promote civil unrest.\n\n - Penal Code (5)03 is a felony punishable by no less than 120 minutes imprisonment and no more than 150 minutes imprisonment. This falls under Officer Discretion."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(5)04.Vigilantism") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(5)04. Vigilantism ")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who attempts to effect justice according to their own understanding of right and wrong, or an unauthorized person attempts to enforce the law. A citizen's arrest may only be effected when a civilian, out of fear for their own safety or the safety of their close friends or relatives, subdues or detains another who is violating the law.\n **2)** A person who violates (12)10. Good Samaritan Clause. \n\n - Penal Code (5)04 is a felony punishable by no less than 90 minutes imprisonment and no more than 120 minutes imprisonment.\n\n **NOTES:** Vigilantism does not apply when a law enforcement officer in the vicinity is in need of immediate assistance, and a civilian aids such officer - for example, helping an officer apprehend an unarmed resisting suspect by holding him down."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(5)05.Terrorism") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(5)05. Terrorism")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who, uses systematic threats or actions against the public good to cause fear and intimidation at a grand scale.\n **2)** A person who commits an attack or threatens an attack on a major public or private facility, such as a office complex, stadium, public transportation system, bridge, or other such structure.\n **3)**This charge can only be issued at the order of the Governor or Chief Justice.\n\n - Penal Code (5)05 is a felony punishable 900 minutes imprisonment.\n\n NOTES: (( This charge requires an in-game lead admin (level 4+) or higher to be approved in lieu of the Governor or Chief Justice ICly. )) "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
      //TITLE 6
    } else if (args[0] == "(6)01.Possession-Of-A-Controlled-Substance") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(6)01. Possession Of A Controlled Substance")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who possesses any controlled substance, except when the substance has been lawfully prescribed to them by a licensed practitioner of medicine or is legally available without a prescription.\n\n - Penal Code (6)01 is a misdemeanor punishable by imprisonment of no less than 15 minutes and no more than 20 minutes. This falls under Officer Discretion.\n- See __(6)11 Possession of Marijuana__, for conditions concerning Marijuana. "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (
      args[0] ==
      "(6)02.Possession-Of-A-Controlled-Substance-With-Intent-To-Sell"
    ) {
      let assault3 = new Discord.MessageEmbed()
        .setTitle(
          "(6)02. Possession Of A Controlled Substance With Intent To Sell"
        )
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person in possession of a controlled substance or multiple controlled substances in an amount of over one ounce (28 grams).\n\n - Penal Code (6)02 is a felony punishable by 30 minutes for every half-ounce (14 grams) of total controlled substances in possession upon arrest up to 600 minutes. Total possession is rounded up to the nearest half-ounce if the perpetrator has more than 28 grams.\n\n **NOTES:** At 28 grams or higher add 30 minutes for every 14 grams in total possession. If the perpetrator has, for example, 60 grams, which is 2 ounces and 4 grams, charge them with 150 minutes, which is four half-ounce increments of 30 minutes (56 grams) and rounded up for the last half ounce (the next 14 grams or less.)\n\n (( Each drug (xx/xx) within inventory is considered 1 gram. ))"
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(6)03.Possession-Of-Drug-Paraphernalia") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(6)03. Possession Of Drug Paraphernalia")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who willingly possesses a device or mechanism used exclusively for the processing or consumption of an illegal controlled substance.\n\n - Penal Code (6)04 is a felony punishable by no less than 45 minutes imprisonment and no more than 60 minutes imprisonment."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (
      args[0] == "(6)04.Maintaining-A-Place-For-The-Purpose-Of-Distribution"
    ) {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(6)04. Maintaining A Place For The Purpose Of Distribution")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who opens or maintains any property for the purpose of unlawfully selling, giving away, storing, or using any controlled substance, firearm, or other illicit device, good, or service.\n\n - Penal Code (6)04 is a felony punishable by no less than 45 minutes imprisonment and no more than 60 minutes imprisonment."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(6)05.Manufacture-Of-A-Controlled-Substance") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(6)05.Manufacture-Of-A-Controlled-Substance")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who, except as otherwise provided by law, manufactures, compounds, converts, produces, or prepares, either directly or indirectly by chemical or natural extraction, any illegal substance.\n\n - Penal Code (6)05 is a felony punishable by no less than 120 minutes imprisonment and no more than 180 minutes imprisonment"
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(6)06.Sale-Of-A-Controlled-Substance") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(6)06. Sale Of A Controlled Substance")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who sells, or offers to sell a controlled substance to another person, regardless of whether or not they possess that controlled substance.\n\n - Penal Code (6)06 is a felony punishable by no less than 90 minutes imprisonment and no more than 120 minutes imprisonment.\n\n **NOTES:** Since it’s irrelevant of possession, this charge can indeed stack with whatever the present possession of a drug is on someone if they are in fact also in illegal possession of a controlled substance. This means anyone caught selling a controlled substance is also charged with whatever possessions they currently have too."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(6)07.Possession-Of-An-Open-Container") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(6)07. Possession Of An Open Container")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who possesses a visible and open container of alcohol in a public place or in a motor vehicle.\n\n- Penal Code (6)07 is an infraction of $1,000."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(6)08.Public-Intoxication") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(6)08. Public Intoxication")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who is found in any public place under the influence of intoxicating liquor.\n\n - Penal Code (6)08 is a misdemeanor punishable by imprisonment for no less than 10 minutes and no more than 25 minutes. This falls under Officer Discretion."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (
      args[0] == "(6)09.Under-The-Influence-Of-A-Controlled-Substance"
    ) {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(6)09. Under The Influence Of A Controlled Substance")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who uses or is under the influence of a controlled substance or dangerous substance without the proper permits or prescription to use such a substance.\n A person can only be charged with this statute for consumption of marijuana if they commit other crimes under the influence of marijuana, or if they are found to be under the influence of marijuana in public, or both.\n\n - Penal Code (6)09 is a misdemeanor punishable by imprisonment for no less than 25 minutes and no more than 35 minutes. This falls under Officer Discretion."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(6)10.Facial-Obstruction-While-Committing-A-Crime") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(6)10. Facial Obstruction While Committing A Crime")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who wears a mask, hood, or facial obstruction to conceal their identity in any public place that refuses to remove the obstruction upon order of a peace officer. This does not apply to individuals wearing traditional holiday costumes, or individuals wearing protective facial equipment for professional trades or employment.\n **2)** A person who wears a mask, hood, or facial obstruction while committing a crime, regardless of the purpose of the obstruction.\n\n- Penal Code (6)10 is a misdemeanor punishable by 10 minutes imprisonment. This falls under Officer Discretion."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(6)11.Possession-of-Marijuana") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(6)11. Possession of Marijuana")
        .setColor("#0000FF")
        .setDescription(
          "**1)**A person who is found to be in possession of Marijuana shall be charged with one of the three offences depending on the amount listed below:\n **2)** 6.0 grams or less - (6)12 Possession of Marijuana\n **3)** Between 7.0 grams to 27.0 grams - (6)01 Possession of a Controlled Substance.\n **4)** 28.0 grams and more - (6)02 Possession of a Controlled Substance with Intent to Sell.\n\n - Penal Code (6)11 is an infraction of $1,000 for possession of up to 3.0g of marijuana, $2,000 for possession of amounts greater than 3.0g but less than or equal to 5.0g, and $3,000 for possession of amounts greater than 5.0g but less than or equal to 6.0g."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
      //TITLE 7
    } else if (args[0] == "(7)01.Animal-Abuse-Cruelty") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(7)01. Animal Abuse - Cruelty")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who intentionally maims, mutilates, tortures, wounds, or kills a living animal.\n **2)** A person whose neglect maims, mutilates, tortures, wounds, or kills a living animal.\n **3)** A person who owns a pet or animal that is not reasonably considered domesticated, safe, or healthy for the animal or the owner, without a proper permit.\n\n - Penal Code (7)01 is a felony punishable by no less than 80 minutes imprisonment and no more than 150 minutes imprisonment.\n  - If the act of abuse was due to neglect or the result of an accident caused by neglect or ignorance the offender shall receive the minimum sentence.\n - If the animal was a police-trained animal during active duty, whether or not intentional, the offender shall receive the maximum sentence."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(7)02.Child-Abuse") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(7)02. Child Abuse")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who willfully inflicts any cruel, excessive, or inhuman corporal punishment upon a child under 18 years of age.\n**2)** A person who willfully inflicts an injury to a child under 18 years of age, resulting in traumatic harm.\n **3)** A person who causes traumatic injury to a child under 18 years of age due to their negligence.\n\n - Penal Code (7)02 is a felony punishable by no less than 360 minutes imprisonment and no more than 720 minutes imprisonment.\n- If the act was caused by negligence the individual shall receive the minimum sentence."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(7)03.Sale-of-Alcohol-To-A-Minor") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(7)03. Sale of Alcohol To A Minor")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who willfully and knowingly sells alcohol to a minor under the age of 21.\n\n - Penal Code (7)03 is a misdemeanor punishable by no less than 25 minutes imprisonment and no more than 35 minutes imprisonment."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(7)04.Minor-Alcohol-Violation") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(7)04. Minor Alcohol Violation")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A minor under the age of 21 who is in possession of alcohol for consumption, products for consumption containing alcohol, or appears to be under the influence of alcohol.\n\n - Penal Code (7)04 is an infraction punishable by a fine of $1,500 and sending of the minor to their parent's or guardian's home."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(7)05.Possession-Of-Child-Pornography") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(7)05. Possession Of Child Pornography")
        .setColor("#0000FF")
        .setDescription(
          "**1)** Every person who knowingly possesses imagery, film, video, storage devices that hold content of a person under the age of 18 engaging or simulating sexual conduct.\n\n - Penal Code (7)05 is a felony punishable by 180 minutes imprisonment."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(8)00.Limitations") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(8)00. Limitations")
        .setColor("#0000FF")
        .setDescription(
          "**1)** **All Vehicle Offenses under Title 8 have a policy of being charged once for each vehicle a person uses or effects for each road law incident that takes place.** Please see Penal Code (11)00 for details on the definition of a road law incident. Please also note that these charges, while considered an extension of the policies and procedures for Title 11. Road Law, do not adhere to the limitations in times or fines under Title 11. Road Law.\n **2)** (8)08. Hit and Run can be charged for each vehicle that a driver or pedestrian commits hit and run upon. All other charges in Title 8 are charged for each vehicle the perpetrator commits the violation within. Changing vehicles during a pursuit for example can lead to two charges of (8)02. Evading a Peace Officer, etc. "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(8)01.-Driving-With-A-Suspended-License") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(8)01. Driving With A Suspended License")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who drives a vehicle, whether on land, sea, or in air, while having a suspended license or authorization.\n\n- Penal Code (8)01 is a misdemeanor punishable by no less than 20 minutes imprisonment and no more than 25 minutes imprisonment.\n\n **NOTES:** (( A suspended license expires after the end of the suspension period set by the peace officer, whether or not the individual has a scripted drivers license. )) "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(8)02.Driving-Without-A-License") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(8)02. Driving Without A License")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who drives a motor vehicle without a valid license is guilty of this crime under this section. \n **2)** Any resident of San Andreas must have a valid driver’s license issued by the State of San Andreas.\n\n • Exception: A person who has been a resident for under 10 days and has a valid driver’s license in any state need not have a San Andreas Drivers License.\n • Exception: Any resident operating a motor vehicle properly registered to the federal government who is authorized by the federal government to operate that vehicle.\n\n -Violations of Penal Code (8)02 are a misdemeanor punishable by a $1000 fine. A vehicle that is being driven by someone without a valid driver’s license may be impounded. "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(8)02.Evading-A-Peace-Officer") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(8)02. Evading A Peace Officer")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who, while operating or being in a vehicle on land, or while operating a bicycle, willfully flees or otherwise attempts to evade or avoid a pursuing peace officer who communicates visually or audibly their request to pull over or stop.\n\n - Penal Code (8)02 is a felony punishable by 120 minutes imprisonment, and suspension of driver's license for between twelve (12) and forty-eight (48) hours at the officer’s discretion.\n\n **NOTES:** This charge does not include the attempt to flee and evade by foot, which is (4)12. Resisting a Peace Officer."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (
      args[0] == "(8)03.Evading-A-Peace-Officer-High-Performance-Vehicle"
    ) {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(8)03. Evading A Peace Officer — High Performance Vehicle")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who, while operating or being in a high performance land vehicle, willfully flees or otherwise attempts to evade or avoid a pursuing peace officer who communicates visually or audibly their request to pull over or stop.\n\n - Penal Code (8)03 is a felony punishable by 240 minutes imprisonment, and revocation of driver's license.\n\n **NOTES:** - This charge does not include the attempt to flee and evade by foot, which is (4)12. Resisting a Peace Officer.\n\n - High Performance Vehicles Include: Buffalo, Comet, Turismo, Bullet, Cheetah, Infernus, Banshee, ZR-350, Super GT, Phoenix, Jester, Elegy, FCR-900"
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(8)04.Evading-A-Peace-Officer-Oversized-Vehicle") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(8)04. Evading A Peace Officer — Oversized Vehicle")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who, while operating or being in an oversized land vehicle, willfully flees or otherwise attempts to evade or avoid a pursuing peace officer who communicates visually or audibly their request to pull over or stop.\n\n - Penal Code (8)04 is a felony punishable by 240 minutes imprisonment, and revocation of driver's license.\n\n **NOTES:** - This charge does not include the attempt to flee and evade by foot, which is (4)12. Resisting a Peace Officer.\n\n -Oversized Vehicles Include: Linerunner, Roadtrain, Trashmaster, Bus, Coach, Packers, Flatbed, Combine Harvester"
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(8)05.Evading-A-Peace-Officer-Naval-Vessel") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(8)05. Evading A Peace Officer — Naval Vessel")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who, while operating or being in a naval vessel, willfully flees or otherwise attempts to evade or avoid a pursuing peace officer who communicates visually or audibly their request to stop.\n\n - Penal Code (8)05 is a felony punishable by 120 minutes imprisonment.\n\n **NOTES:** This charge does not include the attempt to flee and evade by foot, which is (4)12. Resisting a Peace Officer."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(8)06.Evading-A-Peace-Officer-Aircraft") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(8)06. Evading A Peace Officer — Aircraft")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who, while operating or being in an aircraft, willfully flees or otherwise attempts to evade or avoid a pursuing peace officer who communicates visually or audibly their request to land or stop.\n\n - Penal Code (8)06 is a felony punishable by 240 minutes imprisonment.\n\n **NOTES:** - This charge does not include the attempt to flee and evade by foot, which is (4)12. Resisting a Peace Officer."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(8)07.Flying-Without-A-Pilot's-License") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(8)07. Flying Without A Pilot's License")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person operating an aircraft without a proper license or authorization.\n\n- Penal Code (8)07 is a misdemeanor punishable by no less than 25 minutes imprisonment and no more than 35 minutes imprisonment."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(8)08.Hit-And-Run") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(8)08. Hit And Run")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who hits another person or occupied vehicle and leaves the scene of the accident.\n **2)** A person involved in the accident who after being requested by another party involved in the accident fails to disclose their name, provide their license for observation for the purpose of identifying such person, or provides false and misleading information.\n\n - Penal Code (8)08 is a felony punishable by 180 minutes of imprisonment.\n\n  **NOTES:** This charge can be applied for each instance of hit and run occurring over the course of a road law incident."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(8)09.Hit-And-Run-Involving-Property-Damage") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(8)09. Hit And Run Involving Property Damage ")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who hits another person's personal property and leaves the scene of the accident.\n\n - Penal Code (8)09 is a felony punishable by 100 minutes of imprisonment. "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(8)10.Reckless-Operation-Of-An-Aircraft") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(8)10. Reckless Operation Of An Aircraft")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who demonstrates careless or general disregard for the safety of themselves or others while operating a naval vehicle or vehicle intended for off-road travel.\n\n - Penal Code (8)11 is a misdemeanor punishable by no less than 35 minutes imprisonment and no more than 45 minutes imprisonment.\n - Officer may at their discretion either revoke the user's license or permit, or suspend said license or permit for twelve (12) hours."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
      //START PENAL 09 HERE:
    } else if (args[0] == "(9)01.Possession-Of-An-Illegal-Blade") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(9)01. Possession Of An Illegal Blade")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A civilian who possesses a blade or improvised blade over three inches in length that can be used as a cutting, slashing or stabbing weapon, whether or not concealed.\n\n - Penal Code (9)01 is a misdemeanor punishable by imprisonment of no less than 15 minutes and no more than 25 minutes. This falls under Officer Discretion.\n\n **NOTES:** (( Any wieldable script-wise knife or katana in your inventory is considered long enough to kill someone and qualify as an illegal blade. ))"
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(9)02.Possession-Of-An-Unlicensed-Firearm") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(9)02. Possession Of An Unlicensed Firearm")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A civilian who carries a legal, but unlicensed weapon on their person, in their vehicle, place of business, or other facility without proper permits.\n **2)** A person who knowingly and willingly allows another person to carry a weapon on their person, in their vehicle, place of business, or other facility without proper permits.\n\n - Penal Code (9)02 is a misdemeanor punishable by no less than 30 minutes imprisonment and no more than 45 minutes imprisonment.\n-If the individual has a felony on record, they shall receive the maximum sentence.\n\n **NOTES:** Unlicensed weapons include the Colt 45, Desert Eagle, Country Rifle, Shotgun or any other weapons that someone can obtain a license to use, but owns in this specific instance as unlicensed weapons. Illegal firearms are in contrast weapons that are never legal to own, such as UZIs. Assault weapons are AK-47s, etc.  "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(9)03.Possession-Of-An-Illegal-Firearm") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(9)03. Possession Of An Illegal Firearm")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A civilian who possesses any firearm that is illegal in possession or not considered part of any legal weapon type.\n **2)** A person who possesses a firearm that contains illegal modifications in its design including, but not limited to, fully automatic firearms, magazine extensions, and silencers.\n\n - Penal Code (9)03 is a felony punishable by no less than 120 minutes imprisonment and no more than 180 minutes imprisonment.\n\n **NOTES:** (( Script-wise this includes Silenced Pistols, TEC-9s, MP5s and UZIs, regardless of skinning or IC interpretations. ))"
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(9)04.Possession-Of-An-Assault-Weapon") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(9)04. Possession Of An Assault Weapon")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A civilian who possesses an illegal firearm which uses high-velocity, high-caliber, or specialized ammunition including, but not limited to, FMJ ammunition or HEIAP bullets.\n\n - Penal Code (9)04 is a felony punishable by no less than 180 minutes imprisonment and no more than 240 minutes imprisonment.\n\n**NOTES:** (( Script-wise this includes AK-47s, M4s, sniper rifles and automatic shotguns, regardless of skinning or IC interpretations. ))"
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(9)05.Unlicensed-Distribution-Of-A-Weapon") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(9)05. Unlicensed Distribution Of A Weapon")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who participates in the illegal distribution of any weapon defined under Title 9 without proper permits or authorization.\n **2)** A person who offers to sell any weapon defined under Title 9 without proper permits or authorization. \n\n- Penal Code (9)05 is a felony punishable by no less than 240 minutes imprisonment and no more than 360 minutes imprisonment.\n\n **NOTES:** (( This charge is for the distribution of any weapon considered illegal in other charges. Scriptwise batons, canes, bats and golf clubs are still legal to distribute. ))"
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(9)06.Possession-Of-An-Explosive-Device") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(9)06. Possession Of An Explosive Device")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A civilian who possesses any manufactured or improvised device or equipment which is made from explosive and/or highly flammable liquid, gas or solid materials.\n\n - Penal Code (9)06 is a felony punishable by no less than 240 minutes imprisonment and no more than 360 minutes imprisonment."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (
      args[0] == "(9)07.Manufacture-or-Possession-of-an-Improvised-Device"
    ) {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(9)07. Manufacture or Possession of an Improvised Device")
        .setColor("#0000FF")
        .setDescription(
          "**1)** Except as otherwise provided by law, A civilian who manufactures, assembles, disassembles, or possesses parts of any dangerous weapon, explosive, trap, firearm, blade or other destructive device that does not apply or is appropriate to any other penal code entries.\n **2)** This may only be charged against person(s) when it can be proven an individual manufactured improvised blade(s), for example: in a prison environment, otherwise (9)01. Possession Of An Illegal Blade is to be used if an individual is found with an improvised blade.\n**3)** This code entry cannot stack with any other Title 9. Control of Deadly Weapons And Equipment charges.\n\n - Penal Code (9)07 is a felony punishable by no less than 180 minutes imprisonment and no more than 240 minutes imprisonment."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(9)08.Possession-of-Weapons-With-Intent-To-Sell") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(9)08. Possession of Weapons With Intent To Sell")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who is in possession of more than 5 full weapons or weapon components in any combination or amount with the intent to distribute, deliver, or sell.\n\n - Penal Code (9)08 is a felony punishable by no less than 300 minutes imprisonment and no more than 360 minutes imprisonment."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (
      args[0] == "(9)09.Possession-Of-Explosive-Devices-With-Intent-To-Sell"
    ) {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(9)09. Possession Of Explosive Devices With Intent To Sell")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who is in possession of more than 3 explosive devices or explosive device materials in any combination with the intent to distribute, deliver, or sell.\n\n- Penal Code (9)09 is a felony punishable by no less than 360 minutes imprisonment and no more than 420 minutes imprisonment. "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(9)10.Brandishing-A-Firearm") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(9)10. Brandishing A Firearm")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who is pointing, holding, or brandishing a firearm, air or gas operated weapon, or object that appears like a firearm without proper toy and prop identification in an attempt to elicit fear or hysteria.\n **2)** A person holding an object in a manner similar to a firearm who attempts to elicit the same fear or response as brandishing an actual firearm.\n\n- Penal Code (9)10 is a misdemeanor punishable by no less than 20 minutes imprisonment and no more than 30 minutes imprisonment, as well as revocation of the person's firearms permit if applicable\n\n**NOTES:** Brandishing explicitly notes that the purpose is to elicit fear or hysteria. A Weapons Discharge violation is irrelevant of the intent to elicit hysteria so the two charges can be stacked if appropriate. "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(9)11.Weapons-Discharge-Violation") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(9)11. Weapons Discharge Violation")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who fires a firearm without due cause or justifiable motive regardless of registration status or legality.\n **2)** A person committing this offense from a vehicle, whether land, sea, or in air, shall instead be charged with (9)12. Drive-By Shooting.\n\n - Penal Code (9)11 is a misdemeanor punishable by no less than 25 minutes imprisonment and no more than 35 minutes imprisonment, as revocation of the person's firearms permit for seven day if applicable.\n\n **NOTES:** This charge can stack with brandishing a firearm, so you can in fact be charged both. A discharge however is different from brandishing, which requires the perpetrator to be using the brandishing as a way to elicit fear or hysteria."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(9)12.Drive-By-Shooting") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(9)12. Drive-By Shooting")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who drives a vehicle, whether on land, sea, or in air, and has a passenger who they knowingly and willingly let discharge a firearm from within the vehicle, and the passenger is not an on-duty peace officer.\n**2)** A person who exits a vehicle only to immediately discharge a firearm afterward.\n**3)** A person who discharges a weapon in a vehicle, whether on land, sea, or in air, and is not an on-duty peace officer with proper authorization.\n\n - Penal Code (9)12 is a felony punishable by no less than 240 minutes imprisonment and no more than 300 minutes imprisonment."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(9)13.CCW-PF-Violation") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(9)13. CCW - PF Violation")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who carries concealed a legal, registered firearm that is not authorized as a conceal-carry weapon.\n **2)** A person who carries concealed a legal, registered firearm that they are not authorized to carry concealed.\n **3)** A person who does not carry proper permits or documentation for their weapon or occupational weapon usage.\n **4)** Any other firearms regulatory violations as set by the appropriate licensing agency. \n\n- Penal Code (9)13 is a misdemeanor punishable by no less than 25 minutes imprisonment and no more than 40 minutes imprisonment as well as weapon license revocation upon Officer Discretion. This entire charge also falls under Officer Discretion.\n\n **NOTES:** The LSPD has the authority to regulate all firearms policy. Any violations of their policies apply to (9)13. This includes violations pertaining special weapons usage, such as for a prop as part of a production or as a security guard, etc. See (10)08 for more details. See below for links to appropriate LSPD pages for PF and CCW policies."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
      //TITLE 10
    } else if (args[0] == "(10)00.Exception") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(10)00. Exception ")
        .setColor("#0000FF")
        .setDescription(
          "**1)** Penal code entries, by default, may be modified by Sentencing Enhancements within Title 10. However, should a penal code entry be the exception to a Sentencing Enhancement or contain an exception within its description, then that exception shall be followed instead of the Sentencing Enhancement policy.\n**2)** For example, (1)10. Murder cannot be charged for an attempt as an entire charge, (1)08. Attempted Murder, exists for that purpose.\n**3)** Penalties are, as stated, stackable for each occurrence. Committing assault against someone multiple times is worthy of a charge for each time, as long as they are separate police incidents or occur at different times, or occur to different people. Charges can also be stacked for each person they are committed against. Unless an exception exists explicitly."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(10)01.Attempt") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(10)01. Attempt ")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who attempts to commit any crime, but fails or is prevented or intercepted in its perpetration, shall be given the same punishment as if the offense was committed."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(10)02.Conspiracy") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(10)02. Conspiracy")
        .setColor("#0000FF")
        .setDescription(
          "**1)** If two or more persons conspire to commit any crime, to falsely and maliciously to indict another for any crime, or to procure another to be charged or arrested for any crime, they shall be punished by the same punishment as if the offense was committed."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(10)03.Soliciting") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(10)03. Soliciting")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who solicits for the commission or perpetration of any crime shall be punished by the same punishment as if the offense was committed."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(10)04.Government-Worker-Clause") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(10)04. Government Worker Clause")
        .setColor("#0000FF")
        .setDescription(
          "**1)** Any crime knowingly committed against a government worker or state agency employee, as defined by the State Constitution, shall punish the perpetrator with the maximum possible sentence allowed by that particular code entry, unless a judge orders a reduced sentence."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(10)05.Plea-Bargaining-Police-Compliance-Clause") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(10)05. Plea Bargaining - Police Compliance Clause")
        .setColor("#0000FF")
        .setDescription(
          "**1)** If a person, at the request of the District Attorney’s Office, or by other legal authorities within the State of San Andreas, complies to assistance in other activities sufficient to assist with the apprehension or prevention of criminals or crime in San Andreas, then that individual is permitted to receive bargains or other commutes to sentences and punishments issued.\n**2)**The specific amount of a sentence commute are subject to the circumstances of each situation of Plea Bargain or Police Compliance, at the discretion of the judge reviewing the case."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(10)06.Three-strikes-Vehicle-Policy") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(10)06. Three-strikes Vehicle Policy")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who drives a vehicle and receives three driver warnings shall have their vehicle impounded and their license revoked for between twelve (12) and forty-eight (48) hours at the officer’s discretion.\n **2)** An individual who violates a penal code entry that states a specific punishment, such as a license revocation, shall have their vehicle impounded and licensed revoked for seven (7) days.\n **3)** All warnings on record are removed upon revocation or suspension and the three-strikes vehicle policy resets."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(10)07.Criminal-Accomplice-Clause") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(10)07. Criminal Accomplice Clause ")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who acts as an accomplice, aid, adviser, or other supportive role to another person's attempted or successful criminal acts shall receive HALF the punishment allotted to the person who attempted or successful criminal acts."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(10)08.Accessory-After-the-Fact") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(10)08. Accessory After the Fact ")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who knowingly and willingly helps another person who had successfully committed a criminal act shall receive HALF the punishment issued to the person who committed the criminal act.\n **2)** Examples include harboring a fugitive, helping destroy or distort evidence, or assisting the person evade or avoid police custody."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
      //TITLE 11 >
    } else if (args[0] == "(11)00.Limitations") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(11)00. Limitations")
        .setColor("#0000FF")
        .setDescription(
          '**1)** No individual may be fined more than $25,000 in the course of a single road law incident in charges from Title 11. Road Law.\n**2)** No individual may receive more than three driver warnings, amounting to a single license revocation, per road law incident.\n **3)** No more than one of each code entry in Title 11. Road Law may be issued on a driver per road law incident.\n **4)** A road law incident is defined as the moment an officer engages a person until the conclusion of that engagement or situation.\n**5)** A peace officer is entitled to an exterior inspection of a vehicle, as well as verification of all paperwork, licenses, registrations, and other documentation during a traffic stop. A full vehicle inspection is permitted with a search warrant or appropriate probable cause.\n **6)** Checkpoints, border controls, and other police operations on public roads must have a documented purpose, documented record of operations, and exist temporarily in response to (or in preparation to) a particular incident, holiday, etc.\n **7)** A peace officer is only entitled to identify the driver of a vehicle when performing a traffic stop or other vehicle checkpoint operation, unless the passenger falls under a reasonable suspicion to be identified, such as matching an APB description.\n\n **EXAMPLE:** If an officer requests a driver to pull over, and the incident evolves into a pursuit, it is considered part of the same "road law incident" as it is a single, uninterrupted engagement. If the individual escapes or the pursuit is canceled, it is considered a conclusion to a single "road law incident." This means, for example, if a pursuit ends, and the suspect is discovered again, new charges may be issued if they continue to evade police.'
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(11)01.Speeding-Violation") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(11)01. Speeding Violation")
        .setColor("#0000FF")
        .setDescription(
          "**1)** Speeding (Stopped in The Roadway) \n**2)** Speeding 15-25 kmh slower than the posted speed limit. \n **3)** Speeding 10-15 kmh over the posted/known speed limit.\n**4)** Speeding 20-25 kmh faster than the posted/known speed limit\n**5)** Speed 25-30 kmh faster than the posted/known speed limit\n **6)** Speed 25-40 kmh faster than the posted/known speed limit\n **7)** Speed 40+ kmh faster than the posted/known speed limit\n **8)** Speeding double or 100+ the posted/known speed limit. Whichever comes first.\n\n - Road Law (11)01 I. is an infraction punishable by a $65 fine.\n- Road Law (11)01 II.  is an infraction punishable by a $65 fine.\n - Road Law (11)01 III.  is an infraction punishable by a $170 fine.\n- Road Law (11)01 IV.  is an infraction punishable by a $234 fine.\n - Road Law (11)01 V.  is an infraction punishable by a $350 fine.\n - Road Law (11)01 VI is an infraction punishable by a $475 fine.\n - Road Law (11)01 VII. is an infraction punishable by a $550 fine.\n- Road Law (11)01 VIII is a felony punishable by a $1000 fine, imprisonment of no less than 25 minutes and no more than 40 minutes, as well as revoking of license for 3 months. "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (
      args[0] == "(11)02.Failure-To-Abide-To-A-Traffic-Control-Device"
    ) {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(11)02. Failure To Abide To A Traffic Control Device")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A driver who fails to follow the instructions of a traffic control device, including:\n\n Fails to come to a FULL stop at “Stop Points”, noted as white or yellow lines at the edge of every intersection or with appropriate signage.\nCrossing a double yellow line when not entering or leaving a parking lot or private driveway.\n  Ignoring clearly visible signage, whether permanent or temporary, used to direct or control traffic in any way.\n Ignoring the instruction or direction of a peace officer or construction worker at a road works site.\n - A driver who fails to appropriately drive on the right properly with the flow of traffic, except in cases of emergency routes or private paths.\n\n - Road Law (11)02 is an infraction of $3,500 and a warning on the driver’s license at the peace officer’s discretion."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(11)03.Yield-Violation") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(11)03. Yield Violation")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person driving a vehicle that fails to yield, giving right of way, at an intersection that has other vehicles passing or waiting to turn.\n**2)** A person driving a vehicle that fails to yield, giving right of way, at any time to pedestrians or cyclist traffic.\n**3)** A person driving a vehicle that is standing, meaning not in motion and the driver is in the vehicle, on a public road or parking lot and refuses to keep moving upon order of a peace officer.\n Ignoring the emergency lights and sirens of an emergency vehicle requiring clearance.\n\n  - Road Law (11)03 is an infraction of $3,500 and a warning on the driver’s license at the peace officer’s discretion."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(11)04.Parking-Violation") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(11)04. Parking Violation")
        .setColor("#0000FF")
        .setDescription(
          `**1)** A vehicle parked, with its driver outside the vehicle, in the following ways:
  - In a manner that obstructs a lane of traffic and prevents the flow of traffic.
  - In a manner that completely obstructs an alleyway.
  - In a manner that obstructs a parking lot entrance.
  - Within a marked crosswalk.
  - In a manner that obstructs more than two thirds of a sidewalk or pedestrian path.
  - on any median.
  - Facing opposing traffic.
  - On any bridges or tunnels.
  - On any highway or freeway.
  - On railroad tracks or within range of being struck by a railroad car.
  - In the immediate ambulatory parking or bay area of a hospital or clinic.
  - In the immediate vicinity of Rodeo Bank's entrance, including the sidewalk adjacent to the metal barriers.
  - In front of or obstructing a private driveway or an entrance or exit to a private road or path.
  
  **2)** A vehicle parked in a manner not permitted by the property owner. Private property may set its own parking rules, so long as they do not obstruct any public roads or sidewalks. - Policies may also be set by a property manager authorized by the property owner. State agencies, such as the LSPD and others, may set parking rules for the facilities they maintain.
  **3)** A person who is sitting in a vehicle, with the engine on or off, in any above location and refuses to move at the request of a peace officer or, if private property, by the property manager.
  
  - Road Law (11)04 is an infraction punishable by a fine of $2,500 and risk of impoundment at the discretion of the peace officer.
  
          `
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(11)05.Reckless-Driving") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(11)05. Reckless Driving")
        .setColor("#0000FF")
        .setDescription(
          `**1)** A person who demonstrates careless or general disregard for the safety of themselves or others while operating a vehicle, such as (but not limited to):
  - Driving on an unpopulated sidewalk, pedestrian passageway, or plaza
  - Meandering between lanes of traffic erratically.
  - Demonstrating poor control of the vehicle or driving decisions.
          
  - Road Law (11)05 is an infraction of $3,500 and a warning on the driver’s license at the peace officer’s discretion
  - This cannot stack with (11)06. Vehicular Endangerment.
  
  
          `
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(11)06.Vehicular-Endangerment") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(11)06. Vehicular Endangerment")
        .setColor("#0000FF")
        .setDescription(
          `**1)** A person who demonstrates extreme carelessness while operating a vehicle, such as by nearly striking pedestrians, entering pedestrian passageways or nearly causing the severe harm of other motorists.\n**2)** A person who uses their vehicle in any manner that is dangerous to passengers, pedestrians, or nearby residents. \n **3)** A person who drives on railroad tracks, busy pedestrian passageways or plazas, or on the opposite lane of travel with vehicles present, or on the opposite lane of travel on any freeway or highway.\n **4)** Any activity that would be considered (11)05. Reckless Driving, but takes place within close proximity to nearby civilians, or in dense traffic.\n**5)** This cannot stack with (11)05. Reckless Driving.\n\n - Penal Code (11)06 is a misdemeanor punishable by impoundment of the individual’s vehicle with imprisonment of no less than 15 minutes and no more than 25 minutes.\n\n **NOTES:** Vehicular Endangerment cannot stack with reckless driving and is considered a more severe form of reckless driving. It serves as a catch-all for when an officer determines someone’s driving or usage of a vehicle to be beyond safe, reasonable activities. Also take note that this charge does stack with hit and run. Someone who commits a hit and run (hitting any vehicle or person and driving away) can be charged for each occurrence during the course of a road law incident. Per Limitations a driver can only receive either reckless driving or vehicular endangerment\n**ONCE** per road law incident.
          `
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(11)07.Vehicular-Noise-Violation") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(11)07. Vehicular Noise Violation")
        .setColor("#0000FF")
        .setDescription(
          `**1)** A driver whose vehicle emits excessive noise, creating a public nuisance. Examples include modifications to increase the noise pollution of their vehicle, or the excessive use of a vehicle horn or siren without justifiable purpose.\n\n - Road Law (11)07 is an infraction of $1,000.
          `
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(11)08.Illegal-Nitrous-Oxide-Possession") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(11)08. Illegal Nitrous Oxide Possession")
        .setColor("#0000FF")
        .setDescription(
          "**1)**A person who drives a vehicle that contains, possesses, or shows characteristics of nitrous oxide equipment use while not on an official speedway or race track."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(11)09.Illegal-Usage-Of-Hydraulics") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(11)09. Illegal Usage Of Hydraulics")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person driving a vehicle that uses hydraulic equipment while in motion or on a public street, road, or highway.\n **2)** This excludes vehicles with hydraulic equipment permitted exclusively for business and equipment purposes, such as a forklift in motion.\n\n - Road Law (11)09 is an infraction of $2,500 and the impoundment of the individual’s vehicle."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(11)10.Driving-While-Impaired-(DWI)") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(11)10. Driving While Impaired (DWI)")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who drives a vehicle or operate heavy machinery while under the influence of alcohol below the legal limit of 0.08 percent BAV and also demonstrates an inability to safely operate their vehicle or equipment.\n**2)** A person who drives a vehicle or operates heavy machinery for commercial purposes while under the influence of alcohol at or above a 0.04 BAC.\n **3)** A person who drives or operates heavy machinery under the influence of awareness-altering drugs, regardless of whether those drugs are being used under a prescription, and also demonstrates an inability to safely operate their vehicle or equipment.\n\n - Road Law (11)10 is a misdemeanor punishable by no less than 15 minutes imprisonment and no more than 60 minutes imprisonment, as well as the removal of the individual’s license and impoundment of their vehicle.\n- A person who is a government employee shall receive the maximum sentence and be referred to the HR of their respective State Agency."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(11)11.Driving-Under-The-Influence-(DUI)") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(11)11. Driving Under The Influence (DUI)")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who drives a vehicle or operate heavy machinery while under the influence of alcohol at or above the legal limit of 0.08 percent BAC\n\n - Road Law (11)11 is a felony punishable by no less than 60 minutes imprisonment and no more than 100 minutes imprisonment, as well as the removal of the individual’s license and impoundment of their vehicle."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(11)12.Registration-Violation") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(11)12. Registration Violation")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person driving a vehicle on a state, county, or local road without an official owner’s registration or lease registration on file or in hand, or an individual who operates a motor vehicle with no valid license plates on a public roadway.\n\n - Road Law (11)12 is an infraction of $5000, as well as a driver’s warning or impoundment of the individual’s vehicle at the peace officer’s discretion."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(11)13.Unsafe-Usage-Of-A-Bicycle") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(11)13. Unsafe Usage Of A Bicycle")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person's unsafe usage of a bicycle or other self-propelled vehicle that obstructs traffic, incites disorder, creates a hazard, or demonstrates the potential for harm.\n**2)** A person who does not take safety precaution…….. while riding a bicycle.\n\n - Road Law (11)13 is an infraction of $2,500."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(11)14.Street-Racing") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(11)14. Street Racing")
        .setColor("#0000FF")
        .setDescription(
          "**1)** Performing an unlicensed or unauthorized vehicle race, performance, or competition on city, county, or state property\n**2)** Performing a vehicle race on a hazardous private course.\n **3)** Organizing, facilitating, or promoting a street race or other unlicensed or organized vehicle race or competition on city, county, or state property.\n\n - Road Law (11)14 is a misdemeanor punishable by no less than 20 minutes imprisonment and no more than 35 minutes imprisonment.\n\n **NOTES:** A “race” or “competition” is any event that reasonably should not be taking place on a road. A hydraulics competition, for example, or a race around the dockyards both apply under street racing. Any parking lots not considered owned by a particular business (such as the old bank parking lot in Mulholland) are considered public state property."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(11)15.Driving-without-a-Valid-License") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(11)15. Driving without a Valid License")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person operating a motor vehicle without carrying a valid driver's license.\n **2)** A person who refuses to show or provide a driver's license to a peace officer while operating a motor vehicle.\n **3)** A person operating a motor vehicle under the age of 16.\n\n- Road Law (11)15 is a misdemeanor punishable by a $1000 fine. A vehicle that is being driven by someone without a valid driver’s license may be impounded.\n\n  **NOTES:** (( If a driver is under 16 with a valid /license, it shall be taken by the handling peace officer. ))"
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(11)16.Jaywalking") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(11)16. Jaywalking")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who recklessly or intentionally crosses a road in a manner that creates a foreseeable risk of obstructing the flow of traffic, or otherwise creates a hazard to themselves and others.\n\n - Road Law (11)16 is an infraction of $1,000 at the peace officer’s discretion."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(11)17.Illegal-Parking-Of-An-Aircraft") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(11)17. Illegal Parking Of An Aircraft")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who fails to follow the flight protocols as detailed in Section 5 of the State Aviation Act Of 2015\n\n - Road Law (11)17 is an infraction of $10,000 at the peace officer’s discretion."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(11)18.Tinted-Windows") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(11)18. Tinted Windows")
        .setColor("#0000FF")
        .setDescription(
          "**1)** Windshield: Non-reflective tint must not exceed the top 4 inches of the windshield.\n **2)**  Front Side Windows: VLT% must allow 70% of light into the vehicle.\n\n - Road Law (11)18 is an infraction of $75 and impoundment of the vehicle at the peace officer’s discretion."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(11)19.Illegal-Color-of-Underglow") {
      let assault3 = new Discord.MessageEmbed()

        .setTitle("(11)19. Illegal Color of Underglow")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A vehicle that possess either a Red or Blue colored underglow. \n\n - Road Law (11)18 is an infraction of $125 and seizure of the vehicle."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (
      args[0] == "(11)20.Unlawful-Transport-of-Persons-in-a-Cargo-Area"
    ) {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(11)20. Unlawful Transport of Persons in a Cargo Area")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who, while driving a pickup truck or flatbed motor truck transports any number of person(s) in or on the back of the vehicle, or in any area of the vehicle intended to transport cargo.\n\n - Road Law (11)19 is an infraction of $2,500, and impoundment of the vehicle at the peace officer’s discretion.\n\n **NOTES:** The charge of (11)19. Unlawful Transport of Persons in a Cargo Area should only be applied to the driver of the vehicle. Passengers shall not be fined, but only removed from the vehicle."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(11)21.Fire-Hydrant-Parking-Restriction") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(11)21. Fire Hydrant Parking Restriction")
        .setColor("#0000FF")
        .setDescription(
          "**1)** No person shall stop, park, or leave standing any vehicle within 15 feet of a fire hydrant except as follows:\n - If the vehicle is attended by a licensed driver who is seated in the front seat and who can immediately move such vehicle in case of necessity.\n - If the vehicle is owned or operated by the fire department and is clearly marked as a fire department vehicle.\n\n - Road Law (11)20 is an infraction of $5,000 and impoundment of the vehicle at the peace officer’s discretion."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(11)22.Broken-Headlights-Tail-lights") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(11)22. Broken Headlights-Tail lights")
        .setColor("#0000FF")
        .setDescription(
          "**1)** An individual operating a motor vehicle with a busted, broken, or otherwise destroyed lighting fixture on any portion of the vehicle. \n\n - Road Law (11)21 is an infraction punishable by a fine of $500."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(11)23.Unregistered-Vehicle") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(11)23. Unregistered Vehicle")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person(s) that operates a vehicle that is not properly registered by the San Andreas DMV.\n **2)** A vehicle that does not possess a license plate.\n\n - Road Law (11)23 is an infraction punishable by $725 and seizure of the vehicle."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
      //TITLE 12
    } else if (args[0] == "(12)01.Mistake-of-Fact") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(12)01. Mistake of Fact")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who commits an offense but claims, and can display proof that they acted on the honestly held belief they were not violating the law or did not understand the law that was violated.\n **2)** This can only negate an offense if the offense requires mens rea, meaning a willful intention, knowing, or understanding that they are committing a crime.\n**3)** In any other cases, it may reduce the punishment for an offense at the discretion of the peace officer, or a judge when in a criminal suit."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(12)02.Involuntary-Intoxication") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(12)02. Involuntary Intoxication")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person found to be involuntarily intoxicated, meaning they were evidently drugged or had their awareness impaired against their will or knowledge, cannot be found guilty of an offense as they did not have the adequate state of mind to do so."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (
      args[0] ==
      "(12)03.Private-Defense-Self-Defense-Castle-Doctrine-And-Defense-Of-Others"
    ) {
      let assault3 = new Discord.MessageEmbed()
        .setTitle(
          "(12)03. Private Defense, Self Defense, Castle Doctrine, And Defense Of Others"
        )
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who has a reasonable belief that they, or another, are in imminent danger of being killed, seriously injured or unlawfully touched and believe that imminent force is needed to prevent that danger and use no more force than is necessary to negate that danger will absolve of criminal liability in Title 1. Crimes Against the Person. ALL these requirements must be met to be completely absolved of criminal liability.\n **2)** If not all requirements are met, charges may instead be reduced to up to half the minimum sentence for relevant offenses at the discretion of the peace officer or a judge.\n**3)** This also applies in the case of a person who is protecting their home from imminent danger or robbery when on private property.\n **4)** This defense cannot be applied in cases of gang on gang violence or in other such instances where the party claiming the defense was put at risk of immediate danger by their own involvement with actionable criminality."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(12)04.Necessity") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(12)04. Necessity")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who commits an offense out of necessity to protect themselves or others from significant bodily harm or emergency, has no adequate legal alternative, did not create a greater danger through their actions and held an actual and reasonable belief that their action was necessary to prevent harm, will be absolved of criminal liability for the offense deemed to be committed as a necessity to prevent greater harm.\n **2)** This defense cannot be applied in cases of gang on gang violence or in other such instances where the party claiming the defense was put at risk of immediate danger by their own involvement with actionable criminality."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(12)05.Entrapment") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(12)05. Entrapment")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who would not have committed an offense if not for for the harassment, threats, or coercion to do so by members of law enforcement cannot be found guilty of the offense that they were persuaded to commit."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(12)06.Duress") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(12)06. Duress")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who commits any offense in response to immediate threats to kill from a third party and does so in order to negate those threats cannot be found to have had the required criminal intent with which to be held liable for an offense.\n**2)** The only exception to this are severe crimes against the person, such as torture, murder, and attempted murder, as it is not justifiable to take or severely harm another life unless in an act of self defense.     "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(12)07.Parole-Exclusions") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(12)07. Parole Exclusions")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person who is guilty of (1)13. Mayhem, (1)12. Kidnapping, (1)08. Attempted Murder with the Government Worker Clause, (1)10. Murder, (1)09. Manslaughter and (4)21. Violation of Parole Or Probation shall be always excluded from any opportunity of parole."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(12)08.Suspicion-Policy") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(12)08. Suspicion Policy")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A peace officer's or court's justifiable suspicion of a person to commit or conspire to commit a crime is sufficient to allow that individual to be detained for questioning for no more than 60 minutes in police or court custody, however they cannot be searched beyond a legal Terry Frisk for the officer’s safety unless probable cause or concurrent evidence emerges.\n**2)** A person who is at the scene of a crime, riot, or major public disturbance may also be classified under the suspicion policy for temporary detainment.\n **3)** Violation of this policy, or an act of justifiable suspicion that extends beyond legal bounds, extends beyond Color of Law and is satisfactory for suit.\n**4)** A person who fails to identify themselves to a peace officer during arrest or arraignment shall be imprisoned for the maximum time allowed by the law until they can be successfully identified by a peace officer or the courts."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(12)09.Officer-Discretion") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(12)09. Officer Discretion")
        .setColor("#0000FF")
        .setDescription(
          "**1)** Law enforcement officers shall have the authority to use their discretion when issuing infractions or select misdemeanors. This discretion entitles the officer to choose to forego an infraction or misdemeanor penalty based on their personal judgement.\n **2)** Officers must choose to issue Officer Discretion and forego charging, not issue a fine or other punishment in lieu of the typical punishment.\n **3)** Officers cannot elect Officer Discretion if the independent victim, property owner, or affected party chooses to press charges against the perpetrator.\n**4)** Double Jeopardy still applies, meaning a senior officer cannot revoke Officer Discretion once it is issued unless it was issued in disregard for a party wishing to press charges.\n **5)** All misdemeanors that fall under Officer Discretion shall state as such in the sentencing portion of the charge."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(12)10.Good-Samaritan-Clause") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(12)10. Good Samaritan Clause")
        .setColor("#0000FF")
        .setDescription(
          "**1)** Citizens may perform a legal Citizen’s Arrest when an individual has committed a misdemeanor or greater offense and the citizen wishes to restrain the individual until proper authorities can arrive to support, assist, or assess the situation.\n **2)** Citizens may, at the request of the government worker, may give their assistance with carrying out official government business, so long as it doesn’t extend beyond the powers, duties, responsibilities, and authorities of that government worker.\n **3)** Citizens may come to the aid of a government worker who is in duress or incapacitated during official government business to save or protect their life or assist informing official agents. "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(12)11.Imprisonment-Punishment-Criteria") {
      let embed = new Discord.MessageEmbed()
        .setTitle("(12)11. Imprisonment & Punishment Criteria")
        .setColor("#0000FF")
        .setDescription(
          "**1)** Only criminal violations that originate from the San Andreas Penal Code may carry a misdemeanor or felony-level punishment with imprisonment in a county or state penitentiary.\n **2)** All felonies must carry with their punishment imprisonment at the San Andreas State Correctional Facility.\n **3)** All persons convicted of more than 45 minutes imprisonment will carry their sentence at the San Andreas State Correctional Facility. All persons convicted of less than 35 minutes will carry their sentence at the appropriate county facility. All persons convicted of between 35 and 45 minutes will be imprisoned at the location of Officer Discretion.\n **4)** Each penal code entry may include a range of time for imprisonment. While some entries dictate instances where the maximum or minimum time of imprisonment must be used, in all other instances the peace officer issuing the arrest may use their discretion, based on severity, cooperativeness of the suspect, or other criteria to decide the time within\n **5)** The LSPD and SASD may set internal policies to dictate how officers should follow Imprisonment & Punishment Criteria, so long as it does not violate the minimum and maximum punishment policies stated in this Penal Code.\n **6)** Each bullet number in a penal code entry refers to an applicable charge for each entry. Violating any one of the descriptions is a violation of the penal code entry.\n **7)** (( Persons who roleplay without a sound mind will still, in any case, be arrested and charged for the crime they commit. Technically they’d be delivered to an appropriate institution in-character but are dropped off to the local county or state jail before being sent there. They would not be placed with the regular prison population. ))\n More on the next page"
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(embed);
    } else if (args[0] == "(12)12.Maximum-Imprisonment") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(12)12. Maximum Imprisonment ")
        .setColor("#0000FF")
        .setDescription(
          "**1)** A person cannot be imprisoned for longer than 900 minutes despite the number of charges on this individual exceeding a 900 minute penalty, unless said sentence is approved by a Justice of the Courts of San Andreas, the Attorney General, or by the Governor of San Andreas.\n**2)** A person who cannot be effectively identified shall be imprisoned for 900 minutes until they can be properly identified or they fulfill the 900 minute imprisonment. If they are identified, the total time served will be deducted from the time due, with immediate release if they fulfilled more than the total time. A person released with more time spent in prison than their charges yield is not subject to excessive or wrongful imprisonment\n **3)** At the Governor’s discretion, an individual who commits a felony may qualify for death row status, yielding permanent imprisonment unless the Governor issues a pardon.     "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(12)13.Wiretapping-CCTV-Videotaping-Policy") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(12)13. Wiretapping, CCTV & Videotaping Policy")
        .setColor("#0000FF")
        .setDescription(
          "**1)** The State of San Andreas shall have a one-party notification policy for wiretapping without appropriate surveillance warrants and authorizations.\n**2)** A person who is found to violate these wiretapping laws can be charged with (13)09. Wiretapping Violation\n**3)** Moles, bugs, and other illegal surveillance falls under wiretapping laws and violations / policies.\n **4)** Government Employees may be recorded by civilians at all times when conducting their duties in an official capacity or when on-duty.\n **5)** ((CCTV is considered reasonably accessible to the courts when sourced from inside and around all public facilities, from police dashcams, or when subpoenaed by a private business that claims to have CCTV cameras installed. Public CCTVs cannot be tampered, modified, stolen, or destroyed.))\n **6)** ((CCTVs in businesses must be explicitly recorded as existing on paperwork or a license to be used in court or accepted legally.))\n\n **NOTES:** So long as one party (either person on the phone, in a facility, or other location where a conversation or event is being recorded) is aware of the situation it is considered a legal recording. Property owners always have full surveillance rights to their property and facilities, parking lots, etc. they maintain.       "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(12)14.Police-Exigency-Hot-Pursuit-Policy") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("((12)14. Police Exigency & Hot Pursuit Policy")
        .setColor("#0000FF")
        .setDescription(
          "**1)** Peace officers have the authority to follow suspects into private property if directly related to an ongoing pursuit. Entry related to investigations or other projects not in a direct pursuit of a suspect require a warrant.\n **2)** Peace officers have the authority to enter the public area of a private facility, such as the public area of a club or restaurant, at all times the facility is open to the public. Private areas of the facility require permission of the facility manager or a warrant.\n **3)** __(12)15 Probable Cause & Plain View Policy__ still applies when an officer is entering a facility for hot pursuit or entering the public area of a private facility.\n\n **NOTES:** This includes multiple rooms where a suspect could reasonably have ran to, such as several apartments within an apartment complex.      "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(12)15.Probable-Cause-Plain-View-Policy") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(12)15. Probable Cause & Plain View Policy")
        .setColor("#0000FF")
        .setDescription(
          "**1)** Peace officers have the power to seize and record evidence upon any event that is in their plain view so long as they have a legal reason to be where they’re located at the time.\n**2)** A person who gives a government employee permission to view or access a facility, equipment or other areas is permitting an officer to view a facility for probable cause or plain view evidence.\n**3)** Probable Cause does not have a specific definition, but refers to the ongoing premise that an officer’s “gut feeling” supported by plain view evidence (such as the smell of marijuana or other items) that would imply a probable situation of criminality and authorize a search based on that evidence. Probable Cause can be circumstantially contested in a court of law.\n\n **NOTES:** Plain View applies even when an officer is in hot pursuit and enters, for example, an apartment complex and sees a clear criminal act in progress while chasing someone. They can call in other units to seize and handle that situation too.      "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(12)16.Criminal-Fines") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(12)16. Criminal Fines ")
        .setColor("#0000FF")
        .setDescription(
          "**1)** The Department of Justice may seek Criminal Fines through the State of San Andreas Court, to accompany imprisonment, for all felony and misdemeanor charges. The court shall impose a fine in all cases, except where the defendant establishes that he is unable to pay and is not likely to become able to pay any fine. A person who articulates and furnishes financial documentation to indicate financial difficulties with paying the fine shall be afforded additional time to pay the fine through a deadline established by the courts or through a payment plan to the Department of Justice. The fines may stack. The fines are as follows:\n- $25,000 for any misdemeanor charges.\n- $50,000 for any non-violent felony.\n- $100,000 for any violent felony.\n- $150,000 for (1)10. Murder\n\n **NOTES:** All fines paid shall be documented and a record shall be maintained by the Department of Justice. Fines may be used for expenses encumbered during the trial and any departmental authorized expenses.  "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(12)17.Repeat-Offender-Clause") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(12)17. Repeat Offender Clause")
        .setColor("#0000FF")
        .setDescription(
          "**1)** The District Attorney's Office, a representative of the Governor's Office, or a judge may charge a person who's arrested for at least one felony or misdemeanor, who has been previously convicted of at least one felony or misdemeanor, with this clause, which will increase the time due by one-hundred percent (100%) for the repeat offender.\n **2)** A judge may issue an indefinite suspension to any license under the repeat offender clause when it has been demonstrated that the person is likely not to cease committing the offense in the future.\n **3)** A judge may order the indefinite seizure of any vehicle used in the commission of the crime when it has been demonstrated that an individual is unlikely to cease committing the offense in the future and such vehicle was used in the commission of the crime.\n\n**NOTES:** A repeat offender is someone who has been to prison for a felony before and is now arrested for another felony. Only a (Deputy)District Attorney may charge someone with this and it'll double the criminal's time.      "
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0] == "(12)18.Immunity") {
      let assault3 = new Discord.MessageEmbed()
        .setTitle("(12)18. Immunity")
        .setColor("#0000FF")
        .setDescription(
          "**1)** At the request of a law enforcement officer and in return for witness testimony, a district attorney may choose to grant a person either a transactional immunity or use and derivative use immunity.\n **2)** A transactional immunity is a type of immunity where a person cannot be charged for a crime revealed in his/her testimony.\n **3)** A use and derivative use immunity is a type of immunity which guarantees that a person's testimony cannot be used against him/her."
        )
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      message.channel.send(assault3);
    } else if (args[0]) {
      const embed0 = new Discord.MessageEmbed()
        .setTitle("Error, Invalid penal code")
        .setDescription(
          "Invalid penal code, please use **!penal** to see all the penal codes."
        )
        .setColor("0000FF")
        .setFooter(
          "If there's any error, faults or typos, DM CasperTheGhost#4546"
        )
        .setTimestamp();
      return message.channel.send(embed0);
    }
  }
};
// TITLE 1
// (1)01.Intimidation
// (1)02.Assault
// (1)03.Assault-On-A-Peace-Officer
// (1)04.Assault-With-A-Deadly-Weapon
// (1)05.Mutual-Combat
// (1)06.Battery
// (1)07.Aggravated-Battery
// (1)08.Attempted-Murder
// (1)09.Manslaughter
// (1)10.Murder
// (1)11.False-Imprisonment
// (1)12.Kidnapping
// (1)13.Mayhem
// (1)14.Vehicular-Murder
// (1)15. Racketeering

// TITLE 2
// (2)06.Robbery
// (2)07.Armed-Robbery
// (2)08.Petty-Theft
// (2)09.Theft
// (2)10.Grand-Theft
// (2)11.Grand-Theft-Auto
// (2)12.Grand-Theft-Of-A-Firearm
// (2)13.Receiving-Stolen-Property
// (2)14.Extortion
// (2)15.Forgery
// (2)16.Fraud
// (2)17.Vandalism

// TITLE 3
// (3)01.Lewd-Or-Dissolute-Conduct-In-Public
// (3)02.Indecent-Exposure
// (3)03.Prostitution
// (3)04.Solicitation-of-Prostitution
// (3)05.Pandering-Pimping
// (3)06.Sexual-Assault
// (3)07.Sexual-Battery
// (3)08.Rape
// (3)09.Statutory-Rape

// TITLE 4
// (4)01.Bribery
// (4)02.Failure-To-Pay-A-Fine
// (4)03.Contempt-of-Court
// (4)04.Subpoena-Violation
// (4)05.Dissuading-A-Witness-Or-Victim
// (4)06.False-Information-To-A-Government-Employee
// (4)07.Filing-A-False-Complaint
// (4)08.Perjury
// (4)09.Failure-To-Identify-To-A-Peace-Officer
// (4)10.Impersonation-Of-A-Government-Employee
// (4)11.Impersonation-of-an-Individual
// (4)12.Obstruction-Of-A-Government-Employee
// (4)13.Resisting-A-Peace-Officer
// (4)14.Escape-From-Custody
// (4)15.Escape
// (4)16.Prisoner-Breakout
// (4)17.Human-Trafficking
// (4)18.Misuse-Of-A-Government-Hotline
// (4)19.Tampering-With-Evidence
// (4)20.Introduction-Of-Contraband
// (4)21.Violation-Of-Parole-Or-Probation
// (4)22.Voter-Fraud-Voter-Pandering
// (4)23.Corruption-Of-Public-Duty
// (4)24.Corruption-Of-Public-Office
// (4)25.Contempt-of-Senate`);
// TITLE 5
// (5)01.Disturbing-The-Peace
// (5)02.Unlawful-Assembly
// (5)03.Incitement-To-Riot
// (5)04.Vigilantism
// (5)05.Terrorism

// TITLE 6
// (6)01.Possession-Of-A-Controlled-Substance
// (6)02.Possession-Of-A-Controlled-Substance-With-Intent-To-Sell
// (6)03.Possession-Of-Drug-Paraphernalia
// (6)04.Maintaining-A-Place-For-The-Purpose-Of-Distribution
// (6)05.Manufacture-Of-A-Controlled-Substance
// (6)06.Sale-Of-A-Controlled-Substance
// (6)07.Possession-Of-An-Open-Container
// (6)08.Public-Intoxication
// (6)09.Under-The-Influence-Of-A-Controlled-Substance
// (6)10.Facial-Obstruction-While-Committing-A-Crime
// (6)11.Possession-of-Marijuana

// TITLE 7
// (7)01.Animal-Abuse-Cruelty
// (7)02.Child-Abuse
// (7)03.Sale-of-Alcohol-To-A-Minor
// (7)04.Minor-Alcohol-Violation
// (7)05.Possession-Of-Child-Pornography

// TITLE 8
// (8)00.Limitations
// (8)01.-Driving-With-A-Suspended-License
// (8)02.Driving-Without-A-License
// (8)02.Evading-A-Peace-Officer
// (8)03.Evading-A-Peace-Officer-High-Performance-Vehicle
// (8)04.Evading-A-Peace-Officer-Oversized-Vehicle
// (8)05.Evading-A-Peace-Officer-Naval-Vessel
// (8)06.Evading-A-Peace-Officer-Aircraft
// (8)07.Flying-Without-A-Pilot's-License
// (8)08.Hit-And-Run
// (8)09.Hit-And-Run-Involving-Property-Damage

// TITLE 9
// (9)01.Possession-Of-An-Illegal-Blade
// (9)02.Possession-Of-An-Unlicensed-Firearm
// (9)03.Possession-Of-An-Illegal-Firearm
// (9)04.Possession-Of-An-Assault-Weapon
// (9)05.Unlicensed-Distribution-Of-A-Weapon
// (9)06.Possession-Of-An-Explosive-Device
// (9)07.Manufacture-or-Possession-of-an-Improvised-Device
// (9)08.Possession-of-Weapons-With-Intent-To-Sell
// (9)09.Possession-Of-Explosive-Devices-With-Intent-To-Sell
// (9)10.Brandishing-A-Firearm
// (9)11.Weapons-Discharge-Violation
// (9)12.Drive-By-Shooting
// (9)13.CCW-PF-Violation

// TITLE 10
// (10)00.Exception
// (10)01.Attempt
// (10)02.Conspiracy
// (10)03.Soliciting
// (10)04.Government-Worker-Clause
// (10)05.Plea-Bargaining-Police-Compliance-Clause
// (10)06.Three-strikes-Vehicle-Policy
// (10)07.Criminal-Accomplice-Clause

// TITLE 11
// (11)00.Limitations
// (11)01.Speeding-Violation
// (11)02.Failure-To-Abide-To-A-Traffic-Control-Device
// (11)03.Yield-Violation
// (11)04.Parking-Violation
// (11)05.Reckless-Driving
// (11)06.Vehicular-Endangerment
// (11)07.Vehicular-Noise-Violation
// (11)08.Illegal-Nitrous-Oxide-Possession
// (11)09.Illegal-Usage-Of-Hydraulics
// (11)10.Driving-While-Impaired-(DWI)
// (11)11.Driving-Under-The-Influence-(DUI)
// (11)12.Registration-Violation
// (11)13.Unsafe-Usage-Of-A-Bicycle
// (11)14.Street-Racing
// (11)15.Driving-without-a-Valid-License
// (11)16.Jaywalking
// (11)17.Illegal-Parking-Of-An-Aircraft
// (11)18.Tinted-Windows
// (11)19.Illegal-Color-of-Underglow
// (11)20.Unlawful-Transport-of-Persons-in-a-Cargo-Area
// (11)21.Fire-Hydrant-Parking-Restriction
// (11)22.Broken-Headlights-Tail-lights
// (11)23.Unregistered-Vehicle

// TITLE 12  Code Policy

// (12)01.Mistake-of-Fact
// (12)02.Involuntary-Intoxication
// (12)03.Private-Defense-Self-Defense-Castle-Doctrine-And-Defense-Of-Others
// (12)04.Necessity
// (12)06.Duress
// (12)07.Parole-Exclusions
// (12)08.Suspicion-Policy
// (12)09.Officer-Discretion
// (12)10.Good-Samaritan-Clause
// (12)11.Imprisonment-Punishment-Criteria
// (12)12.Maximum-Imprisonment
// (12)13.Wiretapping-CCTV-Videotaping-Policy
// (12)14.Police-Exigency-Hot-Pursuit-Policy
// (12)15.Probable-Cause-Plain-View-Policy
// (12)16.Criminal-Fines
// (12)17.Repeat-Offender-Clause
// (12)18.Immunity
