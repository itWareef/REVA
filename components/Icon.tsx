"use client";
import {
  Building2, Mountain, Cog, PaintRoller, Trees, Zap, Users, HeartHandshake,
  BadgeCheck, Lightbulb, ShieldCheck, Phone, Mail, MapPin, ArrowRight, ArrowLeft,
  ArrowUpRight, Menu, X, Globe, ChevronDown, Check, Quote, Star, Calendar,
  Ruler, Layers, Award, MessageCircle, Send, PhoneCall, Clock, Hammer, HardHat,
  type LucideProps,
} from "lucide-react";

const map = {
  Building2, Mountain, Cog, PaintRoller, Trees, Zap, Users, HeartHandshake,
  BadgeCheck, Lightbulb, ShieldCheck, Phone, Mail, MapPin, ArrowRight, ArrowLeft,
  ArrowUpRight, Menu, X, Globe, ChevronDown, Check, Quote, Star, Calendar,
  Ruler, Layers, Award, MessageCircle, Send, PhoneCall, Clock, Hammer, HardHat,
} as const;

export type IconName = keyof typeof map;

export default function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const C = map[name] ?? Building2;
  return <C {...props} />;
}
