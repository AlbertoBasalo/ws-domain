import { Activity, ActivityStatus } from "./activity.type.ts";
import { Booking } from "./booking.type.ts";

/**
 * Calculates the next status of an activity based on the total number of participants
 * @param activity The current activity
 * @param participants The total number of participants
 * @returns The next status of the activity
 */
export function getNextActivityStatus(activity: Activity, participants: number): ActivityStatus {
  // If the activity is draft, done or cancelled, the status remains the same.
  if (["draft", "done", "cancelled"].includes(activity.status)) return activity.status;
  // Calculate the next status based on the number of participants
  if (participants >= activity.maxParticipants) return "sold-out";
  if (participants >= activity.minParticipants) return "confirmed";
  return activity.status;
}

/**
 * Calculates the total number of booked places from the bookings
 * @param bookings The bookings to calculate the total number of participants
 * @returns The total number of participants
 */
export function getBookedPlaces(bookings: Booking[]): number {
  const result = bookings.reduce((acc, booking) => acc + booking.participants, 0);
  return result;
}
