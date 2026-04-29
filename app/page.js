import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Learning React</h1>
      <ul>
        <li>
          <Link href="/array-map-methods" className="text-blue-500 underline">
            Array Map Methods
          </Link>
        </li>
        <li>
          <Link href="/link" className="text-blue-500 underline">
            Link
          </Link>
        </li>
        <li>
          <Link href="/object-map-methods" className="text-blue-500 underline">
            Object Map Methods
          </Link>
        </li>
        <li>
          <Link href="/props" className="text-blue-500 underline">
            Props
          </Link>
        </li>
        <li>
          <Link href="/regex" className="text-blue-500 underline">
            Regex
          </Link>
        </li>
        <li>
          <Link href="/conditional-if" className="text-blue-500 underline">
            Conditional If
          </Link>
        </li>
        <li>
          <Link href="/filter-method" className="text-blue-500 underline">
            Filter Method
          </Link>
        </li>
        <li>
          <Link href="/concat-method" className="text-blue-500 underline">
            Concat Method
          </Link>
        </li>
        <li>
          <Link href="/reduce-method" className="text-blue-500 underline">
            Reduce Method
          </Link>
        </li>
        <li>
          <Link href="/includes-method" className="text-blue-500 underline">
            Includes Method
          </Link>
        </li>
        <li>
          <Link href="/find-method" className="text-blue-500 underline">
            Find Method
          </Link>
        </li>
        <li>
          <Link href="/push-pop-method" className="text-blue-500 underline">
            Push & Pop Methods
          </Link>
        </li>
        <li>
          <Link
            href="/shift-unshift-method"
            className="text-blue-500 underline"
          >
            Shift & Unshift Methods
          </Link>
        </li>
        <li>
          <Link href="/split-splice-method" className="text-blue-500 underline">
            Split & Splice Methods
          </Link>
        </li>
        <li>
          <Link href="/replace-method" className="text-blue-500 underline">
            Replace Method
          </Link>
        </li>
        <li>
          <Link href="/slice-method" className="text-blue-500 underline">
            Slice Method
          </Link>
        </li>
        <li>
          <Link href="/dynamic-classes" className="text-blue-500 underline">
            Dynamic Classes
          </Link>
        </li>
        <li>
          <Link href="/nav-bar" className="text-blue-500 underline">
            Nav-bar
          </Link>
        </li>
        <li>
          <Link href="/side-bar" className="text-blue-500 underline">
            Responsive sidebar
          </Link>
        </li>
        <li>
          <Link href="/dashboard-layout" className="text-blue-500 underline">
            Dashboard layout
          </Link>
        </li>
        <li>
          <Link href="/Ssticky-header-blur" className="text-blue-500 underline">
            Sticky header with blur
          </Link>
        </li>
        <li>
          <Link href="/footer-with-columns" className="text-blue-500 underline">
            Footer with multiple columns
          </Link>
        </li>
        <li>
          <Link href="/grid-based-layout" className="text-blue-500 underline">
            Grid based landing page layout
          </Link>
        </li>
        <li>
          <Link href="/split-screen-layout" className="text-blue-500 underline">
            Split screen layout (authentification pages)
          </Link>
        </li>
        <li>
          <Link href="/mega-menu" className="text-blue-500 underline">
            Mega menu (Amazon-style)
          </Link>
        </li>
        <li>
          <Link href="/breadcrumbs" className="text-blue-500 underline">
            Breadcrumbs
          </Link>
        </li>
        <li>
          <Link href="/tabs" className="text-blue-500 underline">
            Tabs (underline, pill, animated)
          </Link>
        </li>
        <li>
          <Link href="/pagination" className="text-blue-500 underline">
            Pagination (simple, advanced with icons)
          </Link>
        </li>
        <li>
          <Link
            href="/stepper-progress-bar"
            className="text-blue-500 underline"
          >
            Stepper /multi-step progress bar
          </Link>
        </li>

        <li>
          <Link href="/search-bar" className="text-blue-500 underline">
            Search bar with autocomplete
          </Link>
        </li>
        <li>
          <Link
            href="/multi-select-dropdown"
            className="text-blue-500 underline"
          >
            Multi-select dropdown
          </Link>
        </li>
        <li>
          <Link href="/file-upload" className="text-blue-500 underline">
            File upload component ( drag and drop)
          </Link>
        </li>
        <li>
          <Link href="/toggle-switches" className="text-blue-500 underline">
            Toggle switches
          </Link>
        </li>
        <li>
          <Link href="/sliders" className="text-blue-500 underline">
            Sliders( price range, volume)
          </Link>
        </li>
        <li>
          <Link href="/date-picker" className="text-blue-500 underline">
            Date picker (custom Tailwind version)
          </Link>
        </li>
        <li>
          <Link href="/product-card" className="text-blue-500 underline">
            Product card (e-commerce)
          </Link>
        </li>
        <li>
          <Link href="/blog-post-card" className="text-blue-500 underline">
            Blog post card
          </Link>
        </li>
        <li>
          <Link href="/profile-card" className="text-blue-500 underline">
            Profile card
          </Link>
        </li>
        <li>
          <Link href="/pricing-card" className="text-blue-500 underline">
            Pricing cards (monthly/yearly toggle)
          </Link>
        </li>
        <li>
          <Link href="/carousel" className="text-blue-500 underline">
            Testimonial carousel
          </Link>
        </li>
        <li>
          <Link href="/feature-grid" className="text-blue-500 underline">
            Feature grid (icon + text)
          </Link>
        </li>
        <li>
          <Link href="/modal" className="text-blue-500 underline">
            Modal (centered, slide-in, fullscreen)
          </Link>
        </li>
        <li>
          <Link href="/drawer" className="text-blue-500 underline">
            Drawer (left/right slide)
          </Link>
        </li>
        <li>
          <Link href="/accordion" className="text-blue-500 underline">
            Accordion/ FAQ
          </Link>
        </li>
        <li>
          <Link href="/toast" className="text-blue-500 underline">
            Toast notifications
          </Link>
        </li>
        <li>
          <Link href="/tooltip" className="text-blue-500 underline">
            Tooltip
          </Link>
        </li>
        <li>
          <Link href="/dropdown-menu" className="text-blue-500 underline">
            Dropdown menus
          </Link>
        </li>
        <li>
          <Link href="/command-palette" className="text-blue-500 underline">
            Command palette ( like Spotlight/ VSCode)
          </Link>
        </li>
        <li>
          <Link href="/table" className="text-blue-500 underline">
            Table(sortable, filterable)
          </Link>
        </li>
        <li>
          <Link href="/data-grid" className="text-blue-500 underline">
            Data grid with pagination
          </Link>
        </li>
        <li>
          <Link href="/chart" className="text-blue-500 underline">
            Charts ( using Tailwind + chart librairies)
          </Link>
        </li>
        <li>
          <Link href="/stats-widget" className="text-blue-500 underline">
            Stats widgets (KPI's, metrics)
          </Link>
        </li>
        <li>
          <Link href="/timeline" className="text-blue-500 underline">
            Timeline component
          </Link>
        </li>
        <li>
          <Link href="/animated-navbar" className="text-blue-500 underline">
            Animated navbar
          </Link>
        </li>
        <li>
          <Link href="/" className="text-blue-500 underline">
            Smooth page transitions
          </Link>
        </li>
        <li>
          <Link href="/animated-modals" className="text-blue-500 underline">
            Animated modals
          </Link>
        </li>
        <li>
          <Link href="/" className="text-blue-500 underline">
            Hover effect for cards
          </Link>
        </li>
        <li>
          <Link href="/" className="text-blue-500 underline">
            Animated list items
          </Link>
        </li>
        <li>
          <Link href="/signin-pages" className="text-blue-500 underline">
            Login/ SignIn pages
          </Link>
        </li>
        <li>
          <Link href="/signup-pages" className="text-blue-500 underline">
            Login/ SignUp pages
          </Link>
        </li>
        <li>
          <Link href="/magic-link" className="text-blue-500 underline">
            Magic link UI
          </Link>
        </li>
        <li>
          <Link href="/oauth-buttons" className="text-blue-500 underline">
            OAuth buttons ( Google, Github)
          </Link>
        </li>
        <li>
          <Link
            href="/protected-route-wrapper"
            className="text-blue-500 underline"
          >
            Protected route wrapper
          </Link>
        </li>
        <li>
          <Link href="/shopping-cart" className="text-blue-500 underline">
            Shopping cart drawer
          </Link>
        </li>
        <li>
          <Link href="/product-zoom" className="text-blue-500 underline">
            Product gallery with zoom
          </Link>
        </li>
        <li>
          <Link href="/quantity-selector" className="text-blue-500 underline">
            Quantify selector
          </Link>
        </li>
        <li>
          <Link href="/checkout-form" className="text-blue-500 underline">
            Checkout form
          </Link>
        </li>
        <li>
          <Link href="/summary-card" className="text-blue-500 underline">
            Order summary card
          </Link>
        </li>
        <li>
          <Link href="/sidebar" className="text-blue-500 underline">
            Sidebar
          </Link>
        </li>
        <li>
          <Link href="/user-menu" className="text-blue-500 underline">
            User menu dropdown
          </Link>
        </li>
        <li>
          <Link href="/notification-bell" className="text-blue-500 underline">
            Notification bell + dropdown
          </Link>
        </li>
        <li>
          <Link href="/activity-feed" className="text-blue-500 underline">
            Activity feed
          </Link>
        </li>
        <li>
          <Link href="/settings-panel" className="text-blue-500 underline">
            Settings panel
          </Link>
        </li>
        <li>
          <Link href="/git-commands" className="text-blue-500 underline">
            Git commands
          </Link>
        </li>
        <li>
          <Link href="/terminal-commands" className="text-blue-500 underline">
            Terminal commands
          </Link>
        </li>
        <li>
          <Link href="/yarn-commands" className="text-blue-500 underline">
            Yarn commands
          </Link>
        </li>
        <li>
          <Link href="/node-commands" className="text-blue-500 underline">
            Node commands
          </Link>
        </li>
        <li>
          <Link href="/brewdog-commands" className="text-blue-500 underline">
            Brewdog commands
          </Link>
        </li>
      </ul>
    </div>
  );
}
