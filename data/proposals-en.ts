import type { proposals } from './proposals';

export const proposalsEn: typeof proposals = {
  title: 'Workshops & communication',
  intro: 'Training and consulting for people and teams who want to understand technology, bring AI into their work and communicate their ideas in their own voice.',
  workshops: [
    {
      title: 'An introduction to AI',
      description: 'A talk exploring where artificial intelligence comes from, how it works and what it is changing in our lives. We look at its possibilities, its main risks and benefits, and the debates around its regulation.',
      audience: 'Businesses, events and educational organizations.', topicsLabel: 'What we explore',
      topics: ['The history of AI and today’s context.', 'Key concepts: how AI works and what these tools can do.', 'Main risks, benefits and precautions.', 'Debates around regulation and cultural impact.', 'Time for questions and discussion.'],
      steps: [], care: null,
      outcome: 'A clearer understanding of AI discussions and news, and a stronger ability to distinguish real possibilities from exaggerated promises.',
      formats: ['A 2-hour talk. In person or online.'],
    },
    {
      title: 'Build your own AI workflow',
      description: 'We start with a specific need and build an AI workflow you can use again. We choose tools, create instructions and organize a process that makes sense for you.',
      audience: 'Individuals, retailers, professionals, entrepreneurs, businesses and educators. Beginner to intermediate level.', topicsLabel: 'The process', topics: [],
      steps: [
        { title: 'Define what you need to solve.', text: 'We identify a task or need, decide where AI can help and clarify which decisions remain yours.' },
        { title: 'Choose tools and create instructions.', text: 'We explore ways to work with text, images and video based on your needs, select tools and prepare instructions tailored to your work.' },
        { title: 'Build a workflow you can use again.', text: 'We organize the steps, test them and refine a way of working that you can repeat.' },
      ],
      care: 'We also work on strategy, ethics, privacy and reviewing outputs.',
      outcome: 'A simple workflow for one of your own tasks, with selected tools, instructions and documented steps so you can keep using and improving it.',
      formats: ['Full program: 3 sessions of 1.5 hours each. 4.5 hours in total.', 'Express version: 1 session of 3 hours.', 'In person or online.'],
    },
    {
      title: 'AI & communication: human writing in a robotic age',
      description: 'A workshop to find what you want to say, shape it into a story and use AI to develop and revise texts while keeping your own voice. We work with your ideas, experiences and audiences to write messages that move people, make them think and build connections.',
      audience: 'Businesses, entrepreneurs, teams and business owners.', topicsLabel: 'What we work on',
      topics: ['Define the message and who it’s for.', 'Find stories, experiences and details that make the text your own.', 'Use AI to explore approaches, organize ideas and revise drafts.', 'Make decisions about voice, tone and editing.'],
      steps: [], care: null,
      outcome: 'A developed piece of communication and guidelines for continuing to write with AI from your own ideas and in your own voice.',
      formats: ['Full program: 2 sessions of 1.5 hours each. 3 hours in total.', 'Express version: 1 session of 3 hours.', 'In person or online.'],
    },
  ],
  communicationIntro: 'I help entrepreneurs and businesses communicate what they do: find their own voice, identify stories to share and prepare pitches for the media.',
  communication: [
    { title: 'Voice and tone',
      description: 'We define how your project speaks: what it wants to convey, which words represent it and how its tone changes with the situation. We organize this in a voice and tone guide with guidelines and examples for the people creating your content.',
      outcome: 'A guide to maintaining a recognizable voice across messages and channels.', note: null },
    { title: 'Publishing opportunities',
      description: 'We work with your ideas, news and experiences to identify what is worth telling, who might be interested and where to publish it. We develop topics and angles for your channels and, where relevant, for the media.',
      outcome: 'Content topics and angles aligned with your project’s goals.', note: null },
    { title: 'Working with the media',
      description: 'Understand how newsrooms work, what makes a story newsworthy and how to prepare a relevant pitch for journalists and editors. We work on selecting topics, presenting information and approaching the media.',
      outcome: 'Guidelines and an outreach pitch tailored to your project.',
      note: 'This work focuses on preparing the pitch. Publication decisions remain with each media outlet.' },
  ],
  communicationMode: 'Consulting or training, depending on what you need. We define the scope and support for each project.',
  testimonials: [
    { quote: 'It’s not easy to explain such complex concepts in everyday language, and I think you did it very well.', context: 'On the book Qué es la inteligencia artificial y cómo impacta en nuestras vidas.' },
    { quote: 'Her contribution opened up new questions and perspectives for everyone there.', context: 'A talk on AI and journalism at an event with Profertil Agro.' },
    { quote: 'With great clarity and generosity, Melisa Avolio shared different ways to bring AI into our work as UX/UI designers, showing the value it can offer in our everyday work.', context: 'The AI para potenciar tu trabajo en UX workshop, hosted by +Mujeres en UX Argentina.' },
  ],
  homeAreas: [
    { title: 'Workshops and training', text: 'Understand AI, build your own workflow and communicate your ideas through stories.' },
    { title: 'Content and communication', text: 'I help entrepreneurs and businesses define their voice and find opportunities to communicate what they do.' },
    { title: 'Talks and moderation', text: 'I speak at events and moderate conversations about digital culture, artificial intelligence, communication and social media.' },
  ],
};
