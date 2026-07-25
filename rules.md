# Antigravity Rules & Guidelines for Web Development

This document defines the core architecture, coding standards, patterns, and best practices to be followed by **Antigravity** (AI Agent) when generating, modifying, or refactoring code in this web project.

---

## 1. Core Principles

- **Simplicity & Clarity First**: Write clean, self-documenting code. Prefer explicit, straightforward implementations over clever, opaque tricks.
- **Type Safety**: Strictly leverage TypeScript for static type checking across the entire application boundary.
- **Component Modularity**: Build small, single-responsibility components with strict prop interfaces.
- **Performance by Default**: Avoid unnecessary re-renders, optimize bundle size, lazy-load heavy assets/routes, and handle state efficiently.
- **Security & Hygiene**: Sanitize all user inputs, prevent exposure of environment secrets, and maintain strict CORS / OWASP guidelines.

---

### Code Organization
```text
src/
├── app/              # App router / pages
├── components/       # Reusable UI components
│   ├── ui/           # Low-level primitives (buttons, inputs, modals)
│   └── features/     # Feature-specific composite components
├── hooks/            # Custom reusable React hooks
├── lib/              # Core libraries, client instances, utility functions
├── services/         # API layer, backend calls, data fetchers
├── types/            # Global TypeScript types and Zod schemas
└── styles/           # Global styles and Tailwind configuration
```

---

## 3. TypeScript & Data Validation

1. **No `any` Types**: Explicitly type all variables, function signatures, and hook outputs. Use `unknown` if the type is truly dynamic, then narrow it safely.
2. **Runtime Validation**: Use **Zod** for validating external data (API responses, form inputs, route parameters).
3. **Interfaces vs. Types**: Use `interface` for structural object definitions and component props; use `type` for unions, primitives, and utilities.

```typescript
// Example: Strict Zod validation + Type extraction
import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  role: z.enum(['admin', 'user', 'guest']),
  createdAt: z.string().datetime(),
});

export type User = z.infer<typeof UserSchema>;
```

---

## 4. Component Patterns & UI Rules

- **Functional Components Only**: Use named export arrow/standard functions for React components.
- **Props Definition**: Define props interface directly above the component file or in a co-located `.types.ts` file.
- **Server vs. Client Components (Next.js)**:
  - Default to **Server Components** (`RSC`) for data fetching and layout rendering.
  - Add `'use client'` explicitly at the top of files only when requiring interactivity (`useState`, `useEffect`, event listeners).

```tsx
// Example: Clean Component Pattern
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  isLoading = false,
  className,
  children,
  disabled,
  ...props
}) => {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-md font-medium transition-colors disabled:opacity-50',
        variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700',
        variant === 'secondary' && 'bg-gray-100 text-gray-900 hover:bg-gray-200',
        variant === 'outline' && 'border border-gray-300 text-gray-700 hover:bg-gray-50',
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <span className="animate-pulse">Loading...</span> : children}
    </button>
  );
};
```

---

## 5. API Fetching & Error Handling

- **Use Async/Await**: Avoid legacy chained `.then()` promises.
- **Graceful Failures**: Wrap standard async operations in `try/catch` blocks or use standard React Query error boundaries.
- **Unified API Calls**: Keep fetch calls standardized in the `/services` folder rather than embedding fetch logic inside render functions.

---

## 6. Git & Code Refactoring Instructions for Antigravity

When generated or modifying code:
1. **Preserve Existing Code**: Do not touch unneeded lines. Modify only what is required to fulfill the user prompt.
2. **Modular Edits**: Break large logic into sub-functions or sub-components before writing 300+ line single files.
3. **No Placeholders**: Never insert placeholders like `// TODO: implement later` or `/* logic here */`. Write complete, working code.
4. **Unit Tests**: Place test files adjacent to source files using `.test.ts` or `.spec.ts` naming conventions.

---

## 7. Performance & Optimization Checklist

- [ ] Use standard image components (`<Image />`) with proper sizing and webp support.
- [ ] Implement code splitting and dynamic dynamic imports (`next/dynamic` or `React.lazy`) for heavy components.
- [ ] Memoize expensive calculations (`useMemo`) and handlers passed to child components (`useCallback`) when necessary.
- [ ] Ensure proper accessibility tags (`aria-labels`, semantic HTML tags like `<section>`, `<article>`, `<header>`, `<main>`).
