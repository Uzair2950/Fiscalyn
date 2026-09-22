import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => (
  <nav className="breadcrumbs" aria-label="Breadcrumb">
    <ol>
      <li>
        <Link to="/" aria-label="Home">
          <Home size={15} aria-hidden="true" />
          <span>Home</span>
        </Link>
      </li>
      {items.map((item) => (
        <li key={`${item.label}-${item.path ?? "current"}`}>
          <ChevronRight size={14} aria-hidden="true" />
          {item.path ? (
            <Link to={item.path}>{item.label}</Link>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumbs;
