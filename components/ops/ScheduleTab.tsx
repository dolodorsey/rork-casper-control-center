import React from 'react';
import { Ionicons } from '@expo/vector-icons';

interface ScheduleTabProps {
  color: string;
}

export default function ScheduleTab({ color }: ScheduleTabProps) {
  return <Ionicons name="calendar" size={28} color={color} />;
}
