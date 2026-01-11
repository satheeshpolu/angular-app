users/
 ├─ model/
 │   └─ user.model.ts
 ├─ services/
 │   └─ user.service.ts
 ├─ components/
 │   ├─ user-details/
 │   │   ├─ user-details.component.ts
 │   │   ├─ user-details.component.html
 │   │   └─ user-details.component.css
 │   └─ user-overview/
 │       ├─ user-overview.component.ts
 │       ├─ user-overview.component.html
 │       └─ user-overview.component.css
 ├─ store/                  🔹 (optional: for state management)
 │   ├─ user.store.ts
 │   └─ user.actions.ts
 ├─ guards/                 🔹 (optional: route access control)
 │   └─ user.guard.ts
 ├─ resolvers/              🔹 (optional: prefetching route data)
 │   └─ user.resolver.ts
 ├─ interceptors/           🔹 (optional: feature-specific interceptors)
 │   └─ user-auth.interceptor.ts
 ├─ utils/                  🔹 (optional: feature-level helpers)
 │   └─ user.helpers.ts
 ├─ users.routes.ts
 ├─ users.config.ts         🔹 (optional: constants, feature settings)
 ├─ index.ts                🔹 (re-export for cleaner imports)
 └─ README.md               🔹 (document feature purpose and routes)
