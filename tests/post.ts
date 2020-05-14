import {
  assertEquals,
  assertNotEquals,
} from "https://deno.land/std@0.50.0/testing/asserts.ts";
import {
  stub,
} from "https://raw.githubusercontent.com/udibo/mock/v0.3.0/stub.ts";
import PostService from "../services/post.ts";
import { Post, CreatedPost } from "../types/types.ts";

const createdPost: CreatedPost = {
  id: "e6f36a",
  title: "Liverpool FC",
  authorId: "5303d74c64f66366f00cb9b2a94f3251bf5",
  tags: ["football", "sport", "Liverpool"],
  url: "https://medium.com/@majelbstoat/liverpool-fc-e6f36a",
  canonicalUrl: "http://jamietalbot.com/posts/liverpool-fc",
  publishStatus: "public",
  publishedAt: 1442286338435,
  license: "all-rights-reserved",
  licenseUrl: "https://medium.com/policy/9db0094a1e0f",
};

const mockPost: Post = {
  title: "Liverpool FC",
  contentFormat: "html",
  content: "<h1>Liverpool FC</h1><p>You’ll never walk alone.</p>",
  canonicalUrl: "http://jamietalbot.com/posts/liverpool-fc",
  tags: ["football", "sport", "Liverpool"],
  publishStatus: "public",
};

Deno.test("PostService: create a new post for an user", async () => {
  const mockJsonPromise = Promise.resolve({
    data: createdPost,
  });
  const mockFetchPromise = Promise.resolve(
    { ok: true, json: () => mockJsonPromise },
  );
  const mockFetch = stub(window, "fetch", () => mockFetchPromise);

  const response = await PostService.createPost(mockPost);

  assertNotEquals(response, undefined);
  assertNotEquals(response?.id, undefined);
  assertEquals(response?.canonicalUrl, mockPost.canonicalUrl);
  mockFetch.restore();
});

Deno.test("PostService: fail creating a new post for an user", async () => {
  const mockFetchPromise = Promise.reject(
    { ok: false, error: "Error" },
  );

  const mockFetch = stub(window, "fetch", () => mockFetchPromise);

  const response = await PostService.createPost(mockPost);

  assertEquals(response, undefined);
  mockFetch.restore();
});
