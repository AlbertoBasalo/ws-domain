/**
 * ActivityStatus type definition
 * @description This is an enum for the activity possible status
 */
export type ActivityStatus = "published" | "confirmed" | "sold-out" | "done" | "cancelled" | "draft";

/**
 * Activity type definition
 * @description This is a DTO for the activity entity
 */
export type Activity = {
  id: string;
  name: string;
  slug: string;
  price: number;
  date: Date;
  duration: number;
  location: string;
  minParticipants: number;
  maxParticipants: number;
  status: ActivityStatus;
  userId: string;
};

/** Null object pattern for the Activity type */
export const NULL_ACTIVITY: Activity = {
  id: "",
  name: "",
  slug: "",
  price: 0,
  date: new Date(),
  duration: 0,
  location: "",
  minParticipants: 0,
  maxParticipants: 0,
  status: "draft",
  userId: "",
};
