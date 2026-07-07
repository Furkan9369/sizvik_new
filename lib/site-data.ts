import {
  Share2,
  Megaphone,
  Search,
  Code2,
  PenTool,
  TrendingUp,
  Sparkles,
  Bot,
  FileText,
  Target,
  Palette,
  Rocket,
  LineChart,
  Users,
  Headphones,
  Wallet,
  Lightbulb,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

export const services: Service[] = [
  {
    title: 'Social Media Marketing',
    description:
      'Content engines, community building and platform strategy that turn followers into a loyal, converting audience.',
    icon: Share2,
    image:
      'https://images.pexels.com/photos/6211463/pexels-photo-6211463.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Facebook Ads',
    description:
      'Full-funnel Meta campaigns engineered around creative testing and tight cost-per-acquisition targets.',
    icon: Megaphone,
    image:
      'https://images.pexels.com/photos/2661256/pexels-photo-2661256.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Google Ads',
    description:
      'Search, Performance Max and YouTube campaigns that capture high-intent demand and scale profitably.',
    icon: Search,
    image:
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Website Development',
    description:
      'Conversion-first websites and landing pages built fast, optimised for speed, SEO and measurable growth.',
    icon: Code2,
    image:
      'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Graphic Designing',
    description:
      'Scroll-stopping ad creatives, social posts and brand collateral designed to perform across every channel.',
    icon: PenTool,
    image:
      'https://images.pexels.com/photos/3781338/pexels-photo-3781338.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'SEO',
    description:
      'Technical, on-page and content-led SEO that compounds organic traffic and durable search visibility.',
    icon: TrendingUp,
    image:
      'https://images.pexels.com/photos/7662886/pexels-photo-7662886.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Brand Identity',
    description:
      'Naming, logo systems, visual language and guidelines that make your brand instantly recognisable.',
    icon: Sparkles,
    image:
      'https://images.pexels.com/photos/3784701/pexels-photo-3784701.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'AI Automation',
    description:
      'Workflows, chatbots and AI agents that automate lead capture, follow-up and reporting end-to-end.',
    icon: Bot,
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Content Creation',
    description:
      'Short-form video, photography and copywriting produced at scale to feed every channel consistently.',
    icon: FileText,
    image:
      'https://images.pexels.com/photos/3781336/pexels-photo-3781336.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];

export type Reason = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const reasons: Reason[] = [
  {
    number: '01',
    title: 'Experienced Team',
    description:
      'A senior team of strategists, creatives and engineers with a decade of combined growth-marketing experience.',
    icon: Users,
  },
  {
    number: '02',
    title: 'ROI Focused',
    description:
      'Every campaign is tied to revenue and cost-per-acquisition — we optimise for profit, not vanity metrics.',
    icon: Target,
  },
  {
    number: '03',
    title: 'Creative Strategies',
    description:
      'Original, platform-native creative built from insight, not templates, so your brand stands out in the feed.',
    icon: Lightbulb,
  },
  {
    number: '04',
    title: 'Affordable Pricing',
    description:
      'Transparent, modular retainers that scale with your budget — premium output without the agency overhead.',
    icon: Wallet,
  },
  {
    number: '05',
    title: '24/7 Support',
    description:
      'A dedicated account team and live dashboards keep you informed and supported around the clock.',
    icon: Headphones,
  },
];

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 320, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Retention' },
  { value: 14, suffix: 'M+', label: 'Revenue Generated' },
  { value: 9, suffix: 'yrs', label: 'Industry Experience' },
];

export type Project = {
  title: string;
  category: string;
  image: string;
  span: string;
};

export const projects: Project[] = [
  {
    title: 'Lumen Skincare',
    category: 'Social Media + Ads',
    image:
      'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'row-span-2',
  },
  {
    title: 'Northwind Coffee',
    category: 'Brand Identity',
    image:
      'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'row-span-1',
  },
  {
    title: 'Atlas Fitness',
    category: 'Web Development',
    image:
      'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'row-span-1',
  },
  {
    title: 'Verde Studio',
    category: 'SEO + Content',
    image:
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'row-span-2',
  },
  {
    title: 'Maison Bloom',
    category: 'E-commerce Ads',
    image:
      'https://images.pexels.com/photos/5632400/pexels-photo-5632400.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'row-span-1',
  },
  {
    title: 'Pulse Fintech',
    category: 'AI Automation',
    image:
      'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=900',
    span: 'row-span-1',
  },
];

export type Step = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const steps: Step[] = [
  {
    number: '01',
    title: 'Strategy',
    description:
      'We audit your brand, market and goals to define a measurable growth roadmap.',
    icon: Target,
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We craft the visual identity, creatives and assets that will carry your message.',
    icon: Palette,
  },
  {
    number: '03',
    title: 'Marketing',
    description:
      'We launch multi-channel campaigns, testing and optimising in real time.',
    icon: Rocket,
  },
  {
    number: '04',
    title: 'Growth',
    description:
      'We scale what works, report transparently and compound your results.',
    icon: LineChart,
  },
];

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Sofia Marchetti',
    role: 'Founder',
    company: 'Lumen Skincare',
    quote:
      'Within four months our monthly revenue tripled. The creative quality and reporting are genuinely best-in-class — we finally have an agency that feels like an extension of our team.',
    avatar:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Daniel Okafor',
    role: 'CEO',
    company: 'Atlas Fitness',
    quote:
      'They rebuilt our site and relaunched our ads in three weeks. Cost per lead dropped 41% and we are now booked out two months ahead. The most ROI-focused team we have worked with.',
    avatar:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Amara Hossain',
    role: 'Marketing Lead',
    company: 'Pulse Fintech',
    quote:
      'The AI automation alone paid for the retainer. Lead capture, follow-up and reporting now run on autopilot, and our sales team only talks to qualified, warm prospects.',
    avatar:
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Lucas Bergström',
    role: 'Co-founder',
    company: 'Northwind Coffee',
    quote:
      'From naming to packaging to the launch campaign, they built a brand that feels premium and cohesive. Our first-week sales beat the forecast by 2.3x.',
    avatar:
      'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export const clientLogos = [
  'Lumen',
  'Northwind',
  'Atlas',
  'Verde',
  'Maison',
  'Pulse',
  'Orbit',
  'Cascade',
  'Vertex',
  'Solace',
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];
