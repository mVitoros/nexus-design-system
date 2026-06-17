import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Home,
  Menu,
  Minus,
  Plus,
  Search,
  Settings,
  User,
  X,
} from "lucide-react";

export const iconRegistry = {
  home: Home,
  user: User,
  settings: Settings,
  menu: Menu,
  search: Search,
  plus: Plus,
  minus: Minus,
  check: Check,
  close: X,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronDown: ChevronDown,
} as const;

export type IconName = keyof typeof iconRegistry;
