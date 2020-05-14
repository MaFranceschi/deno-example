import {
  assertEquals,
  assertNotEquals,
} from "https://deno.land/std@0.50.0/testing/asserts.ts";
import {
  stub,
} from "https://raw.githubusercontent.com/udibo/mock/v0.3.0/stub.ts";
import UserService from "../services/user.ts";

const mockProfile = {
  id: "1",
  username: "deno.land",
  name: "Deno Land",
  url: "https://deno.land/",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/84/Deno.svg",
};

Deno.test("UserService: Get user profile correctly", async () => {
  const mockJsonPromise = Promise.resolve({
    data: mockProfile,
  });
  const mockFetchPromise = Promise.resolve(
    { ok: true, json: () => mockJsonPromise },
  );

  const mockFetch = stub(window, "fetch", () => mockFetchPromise);

  const userProfile = await UserService.getProfile();

  assertNotEquals(userProfile, undefined);
  assertEquals(userProfile, mockProfile);
  mockFetch.restore();
});

Deno.test("UserService: Fail getting user profile", async () => {
  const mockFetchPromise = Promise.reject(
    { ok: false, error: "Error" },
  );

  const mockFetch = stub(window, "fetch", () => mockFetchPromise);

  const userProfile = await UserService.getProfile();

  assertEquals(userProfile, undefined);
  mockFetch.restore();
});
