// freestyle.config.ts
import { defineConfig } from "freestyle-sh";
import "dotenv/config";
var freestyle_config_default = defineConfig({
  dev: {
    proxy: "http://localhost:3000",
    command: "bun run vinxi dev"
  },
  deploy: {
    web: {
      entryPoint: ".output/server/index.ts"
    }
  }
});
export {
  freestyle_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vZnJlZXN0eWxlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgZGVmaW5lQ29uZmlnfSBmcm9tICdmcmVlc3R5bGUtc2gnXG5pbXBvcnQgJ2RvdGVudi9jb25maWcnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgZGV2OiB7XG4gICAgICAgIHByb3h5OiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiLFxuICAgICAgICBjb21tYW5kOiBcImJ1biBydW4gdmlueGkgZGV2XCJcbiAgICB9LFxuICAgIGRlcGxveToge1xuICAgICAgICB3ZWI6IHtcbiAgICAgICAgICAgIGVudHJ5UG9pbnQ6IFwiLm91dHB1dC9zZXJ2ZXIvaW5kZXgudHNcIlxuICAgICAgICB9XG4gICAgfVxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUFBLFNBQVMsb0JBQW1CO0FBQzVCLE9BQU87QUFFUCxJQUFPLDJCQUFRLGFBQWE7QUFBQSxFQUN4QixLQUFLO0FBQUEsSUFDRCxPQUFPO0FBQUEsSUFDUCxTQUFTO0FBQUEsRUFDYjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ0osS0FBSztBQUFBLE1BQ0QsWUFBWTtBQUFBLElBQ2hCO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
