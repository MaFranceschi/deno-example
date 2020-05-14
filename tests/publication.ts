import {
  assertEquals,
  assertNotEquals,
} from "https://deno.land/std@0.50.0/testing/asserts.ts";
import {
  stub,
} from "https://raw.githubusercontent.com/udibo/mock/v0.3.0/stub.ts";
import PublicationService from "../services/publication.ts";

const mockPublications = [{
  id: "1",
  name: "Deno Land",
  description: "Deno logging",
  url: "https://deno.land/std/log/",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/84/Deno.svg",
}, {
  id: "2",
  name: "Deno Land",
  description: "Deno Formatting",
  url: "https://deno.land/std/fmt/",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/84/Deno.svg",
}, {
  id: "3",
  name: "Deno Land",
  description: "Deno Testing",
  url: "https://deno.land/std/testing/",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/84/Deno.svg",
}];

Deno.test("PublicationService: Get publications for user id", async () => {
  const mockJsonPromise = Promise.resolve({
    data: mockPublications,
  });
  const mockFetchPromise = Promise.resolve(
    { ok: true, json: () => mockJsonPromise },
  );

  const mockFetch = stub(window, "fetch", () => mockFetchPromise);

  const userPublications = await PublicationService.getPublications();

  assertNotEquals(userPublications, undefined);
  assertEquals(userPublications?.length, mockPublications.length);
  mockFetch.restore();
});

Deno.test("PublicationService: Fail getting user publications", async () => {
  const mockFetchPromise = Promise.reject(
    { ok: false, error: "Error" },
  );

  const mockFetch = stub(window, "fetch", () => mockFetchPromise);

  const userPublications = await PublicationService.getPublications();

  assertEquals(userPublications, undefined);
  mockFetch.restore();
});
