export type BaseTimelineItem = {
  type: "work" | "education" | "certification";
  title: string;
  period: string;
  achievements?: string[];
  skills?: string[];
};

export type WorkItem = BaseTimelineItem & {
  type: "work";
  company: string;
  location: string;
};

export type EducationItem = BaseTimelineItem & {
  type: "education";
  institution: string;
  achievement?: string;
};

export type CertificationItem = BaseTimelineItem & {
  type: "certification";
  institution: string;
};

export type TimelineItemType = WorkItem | EducationItem | CertificationItem;

export type TimelineItemProps = {
  item: TimelineItemType;
  isLast: boolean;
};

export type TimelineSectionProps = {
  title: string;
  items: TimelineItemType[];
  icon: React.ReactNode;
};
