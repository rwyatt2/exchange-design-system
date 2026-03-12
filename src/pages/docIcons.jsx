/**
 * Shared doc-page icon helpers using Lucide React.
 * Import specific named exports to use in doc pages.
 */
import React from 'react';
import {
  Check, X, Zap, ChevronRight, Sparkles,
  Tag, Keyboard, AlertCircle, AlertTriangle, Crosshair, RefreshCw,
  MousePointer2, Ruler, Link2, LayoutTemplate, Search,
  Smartphone, FileEdit, Package, Accessibility,
  VolumeX, Palette, Type, Lock,
} from 'lucide-react';

// Guideline section icons
export const DoIcon      = () => <Check         size={13} strokeWidth={2.5} aria-hidden="true" />;
export const DontIcon    = () => <X             size={13} strokeWidth={2.5} aria-hidden="true" />;
export const BulletIcon  = () => <Sparkles      size={13} strokeWidth={2}   aria-hidden="true" />;
export const ArrowIcon   = () => <ChevronRight  size={13} strokeWidth={2}   aria-hidden="true" />;
export const ZapIcon     = () => <Zap           size={13} strokeWidth={2}   aria-hidden="true" />;

// Accessibility section icons
export const A11yIcon      = () => <Accessibility  size={14} strokeWidth={1.75} aria-hidden="true" />;
export const LabelIcon     = () => <Tag            size={14} strokeWidth={1.75} aria-hidden="true" />;
export const KeyboardIcon  = () => <Keyboard       size={14} strokeWidth={1.75} aria-hidden="true" />;
export const ErrorIcon     = () => <AlertCircle    size={14} strokeWidth={1.75} aria-hidden="true" />;
export const FocusIcon     = () => <Crosshair      size={14} strokeWidth={1.75} aria-hidden="true" />;
export const LinkIcon      = () => <Link2          size={14} strokeWidth={1.75} aria-hidden="true" />;
export const SearchDocIcon = () => <Search         size={14} strokeWidth={1.75} aria-hidden="true" />;
export const MobileIcon    = () => <Smartphone     size={14} strokeWidth={1.75} aria-hidden="true" />;
export const CloseIcon     = () => <X              size={14} strokeWidth={1.75} aria-hidden="true" />;

// Behavior section icons
export const StateIcon     = () => <RefreshCw      size={14} strokeWidth={1.75} aria-hidden="true" />;
export const MouseIcon     = () => <MousePointer2  size={14} strokeWidth={1.75} aria-hidden="true" />;
export const RulerIcon     = () => <Ruler          size={14} strokeWidth={1.75} aria-hidden="true" />;
export const LayoutIcon    = () => <LayoutTemplate  size={14} strokeWidth={1.75} aria-hidden="true" />;
export const SparkIcon     = () => <Sparkles       size={14} strokeWidth={1.75} aria-hidden="true" />;
export const EditIcon      = () => <FileEdit       size={14} strokeWidth={1.75} aria-hidden="true" />;
export const PackageIcon   = () => <Package        size={14} strokeWidth={1.75} aria-hidden="true" />;
export const FeedbackIcon  = () => <Sparkles       size={14} strokeWidth={1.75} aria-hidden="true" />;
export const MuteIcon      = () => <VolumeX        size={14} strokeWidth={1.75} aria-hidden="true" />;
export const ColorIcon     = () => <Palette        size={14} strokeWidth={1.75} aria-hidden="true" />;
export const TypeIcon      = () => <Type           size={14} strokeWidth={1.75} aria-hidden="true" />;
export const LockIcon      = () => <Lock           size={14} strokeWidth={1.75} aria-hidden="true" />;
export const WarningIcon   = () => <AlertTriangle  size={14} strokeWidth={1.75} aria-hidden="true" />;
