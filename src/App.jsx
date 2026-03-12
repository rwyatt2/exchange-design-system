import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DocsLayout from './layouts/DocsLayout';
import Home from './pages/Home';
import GettingStarted from './pages/GettingStarted';
import Contributing from './pages/Contributing';
import Governance from './pages/Governance';
import ColorsPage from './pages/tokens/ColorsPage';
import TypographyPage from './pages/tokens/TypographyPage';
import SpacingPage from './pages/tokens/SpacingPage';
import ElevationPage from './pages/tokens/ElevationPage';
import RadiiPage from './pages/tokens/RadiiPage';
import ZIndexPage from './pages/tokens/ZIndexPage';
import MotionPage from './pages/tokens/MotionPage';
import IconPage from './pages/tokens/IconPage';
import ButtonPage from './pages/components/ButtonPage';
import CardPage from './pages/components/CardPage';
import BadgePage from './pages/components/BadgePage';
import SearchBarPage from './pages/components/SearchBarPage';
import TextInputPage from './pages/components/TextInputPage';
import SelectPage from './pages/components/SelectPage';
import CheckboxPage from './pages/components/CheckboxPage';
import RadioGroupPage from './pages/components/RadioGroupPage';
import TabsPage from './pages/components/TabsPage';
import AlertPage from './pages/components/AlertPage';
import ModalPage from './pages/components/ModalPage';
import DataTablePage from './pages/components/DataTablePage';
import SpinnerPage from './pages/components/SpinnerPage';
import TooltipPage from './pages/components/TooltipPage';
import BreadcrumbsPage from './pages/components/BreadcrumbsPage';
import PaginationPage from './pages/components/PaginationPage';
import TogglePage from './pages/components/TogglePage';
import TagPage from './pages/components/TagPage';
import ToastPage from './pages/components/ToastPage';
import PopoverPage from './pages/components/PopoverPage';
import ProgressBarPage from './pages/components/ProgressBarPage';
import AvatarPage from './pages/components/AvatarPage';
import SkeletonPage from './pages/components/SkeletonPage';
import DividerPage from './pages/components/DividerPage';
import EmptyStatePage from './pages/components/EmptyStatePage';
import PatternsOverview from './pages/patterns/PatternsOverview';
import FormPatternPage from './pages/patterns/FormPatternPage';
import SearchResultsPatternPage from './pages/patterns/SearchResultsPatternPage';
import FeedbackPatternPage from './pages/patterns/FeedbackPatternPage';
import LoadingStatesPatternPage from './pages/patterns/LoadingStatesPatternPage';
import NavigationPatternPage from './pages/patterns/NavigationPatternPage';
import NotificationSystemPatternPage from './pages/patterns/NotificationSystemPatternPage';
import EmptyStatePatternPage from './pages/patterns/EmptyStatePatternPage';
import DataEntryPatternPage from './pages/patterns/DataEntryPatternPage';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<DocsLayout />}>
          <Route index element={<Home />} />
          <Route path="getting-started" element={<GettingStarted />} />
          <Route path="contributing" element={<Contributing />} />
          <Route path="governance" element={<Governance />} />
          {/* Tokens */}
          <Route path="tokens/colors" element={<ColorsPage />} />
          <Route path="tokens/typography" element={<TypographyPage />} />
          <Route path="tokens/spacing" element={<SpacingPage />} />
          <Route path="tokens/elevation" element={<ElevationPage />} />
          <Route path="tokens/radii" element={<RadiiPage />} />
          <Route path="tokens/z-index" element={<ZIndexPage />} />
          <Route path="tokens/motion" element={<MotionPage />} />
          <Route path="tokens/icons" element={<IconPage />} />
          {/* Components */}
          <Route path="components/button" element={<ButtonPage />} />
          <Route path="components/card" element={<CardPage />} />
          <Route path="components/badge" element={<BadgePage />} />
          <Route path="components/search-bar" element={<SearchBarPage />} />
          <Route path="components/text-input" element={<TextInputPage />} />
          <Route path="components/select" element={<SelectPage />} />
          <Route path="components/checkbox" element={<CheckboxPage />} />
          <Route path="components/radio-group" element={<RadioGroupPage />} />
          <Route path="components/tabs" element={<TabsPage />} />
          <Route path="components/alert" element={<AlertPage />} />
          <Route path="components/modal" element={<ModalPage />} />
          <Route path="components/data-table" element={<DataTablePage />} />
          <Route path="components/spinner" element={<SpinnerPage />} />
          <Route path="components/tooltip" element={<TooltipPage />} />
          <Route path="components/breadcrumbs" element={<BreadcrumbsPage />} />
          <Route path="components/pagination" element={<PaginationPage />} />
          <Route path="components/toggle" element={<TogglePage />} />
          <Route path="components/tag" element={<TagPage />} />
          <Route path="components/toast" element={<ToastPage />} />
          <Route path="components/popover" element={<PopoverPage />} />
          <Route path="components/progress-bar" element={<ProgressBarPage />} />
          <Route path="components/avatar" element={<AvatarPage />} />
          <Route path="components/skeleton" element={<SkeletonPage />} />
          <Route path="components/divider" element={<DividerPage />} />
          <Route path="components/empty-state" element={<EmptyStatePage />} />
          {/* Patterns */}
          <Route path="patterns" element={<PatternsOverview />} />
          <Route path="patterns/form-layout" element={<FormPatternPage />} />
          <Route path="patterns/search-results" element={<SearchResultsPatternPage />} />
          <Route path="patterns/feedback-flows" element={<FeedbackPatternPage />} />
          <Route path="patterns/loading-states" element={<LoadingStatesPatternPage />} />
          <Route path="patterns/navigation" element={<NavigationPatternPage />} />
          <Route path="patterns/notifications" element={<NotificationSystemPatternPage />} />
          <Route path="patterns/empty-states" element={<EmptyStatePatternPage />} />
          <Route path="patterns/data-entry" element={<DataEntryPatternPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
