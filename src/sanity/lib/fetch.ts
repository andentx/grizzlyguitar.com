import { client } from "./client";

export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
  revalidate = 3600,
}: {
  query: string;
  params?: Record<string, unknown>;
  tags?: string[];
  revalidate?: number;
}): Promise<{ data: T }> {
  return {
    data: await client.fetch<T>(query, params, {
      next: {
        revalidate,
        tags,
      },
    }),
  };
}
