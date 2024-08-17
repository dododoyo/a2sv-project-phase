import React, { useState } from "react";
import { OpportunityCardProps } from "../types";
import Image from "next/image";
import {
  useAddBookmarkMutation,
  useDeleteBookmarkMutation,
} from "@/app/services/bookmark";
import { useAppSelector } from "@/app/store";
import Link from "next/link";

const OpportunityCard: React.FC<OpportunityCardProps> = ({ data }) => {
  const bookmarks = useAppSelector((state) => state.bookmarkReducer.value);
  const [isBookmarked, setIsBookmarked] = useState(
    bookmarks.some((bookmark) => bookmark.eventID === data.id)
  );
  const [addBookmark, { isLoading: isAddingBookmark }] =
    useAddBookmarkMutation();
  const [deleteBookmark, { isLoading: isDeletingBookmark }] =
    useDeleteBookmarkMutation();

  const accessToken = useAppSelector(
    (state) => state.authReducer.value.accessToken
  );

  const toggleBookmark = async () => {
    try {
      if (isBookmarked) {
        const response = await deleteBookmark(
          JSON.stringify({
            id: data.id,
            accessToken: accessToken,
          })
        ).unwrap();
        if (response.success) {
          setIsBookmarked(!isBookmarked);
        } else {
          if (response.status === 409) {
            console.error(
              "Conflict: The bookmark already exists or there is another conflict."
            );
            throw new Error(
              "Conflict: The bookmark already exists or there is another conflict."
            );
          }

          if (response.status !== 200) {
            throw new Error("Invalid response from server");
          }
        }
      } else {
        const response = await addBookmark(
          JSON.stringify({
            id: data.id,
            accessToken: accessToken,
          })
        ).unwrap();
        if (response.success) {
          setIsBookmarked(!isBookmarked);
        } else {
          if (response.status === 409) {
            console.error(
              "Conflict: The bookmark already exists or there is another conflict."
            );
            throw new Error(
              "Conflict: The bookmark already exists or there is another conflict."
            );
          }

          if (response.status !== 200) {
            throw new Error("Invalid response from server");
          }
        }
      }
    } catch (error) {
      console.error("Failed to toggle bookmark", error);
    }
  };

  return (
    // opportunity-card attribute is used for testing purposes.
    <div className="opportunity-card relative border border-gray-400 m-4 rounded-lg shadow-md p-6 transform transition duration-200 ease-in-out">
      <div className="absolute top-2 right-2 z-10">
        <button
          onClick={toggleBookmark}
          disabled={isAddingBookmark || isDeletingBookmark}
        >
          {isAddingBookmark || isDeletingBookmark ? (
            <svg
              className="animate-spin h-6 w-6 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
          ) : isBookmarked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v18l7-5 7 5V3H5z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v18l7-5 7 5V3H5z"
              />
            </svg>
          )}
        </button>
      </div>

      <Link key={data.id} href={`/opportunity/${data.id}`}>
        <div className="flex items-center mb-4">
          <Image
            src={
              data.logoUrl !== ""
                ? data.logoUrl
                : "https://previews.123rf.com/images/get4net/get4net1802/get4net180200198/94675971-corporate-businessman-avatar.jpg"
            }
            alt="Company Avatar"
            width={68}
            height={68}
            className="mr-4"
          />
          <div>
            <h2 className="text-lg font-bold text-gray-900">{data.title}</h2>
            <p className="text-sm text-gray-700">
              {data.orgName} •{" "}
              {data.location.map((eachLocation) => eachLocation + "    ")}
            </p>
          </div>
        </div>

        <p className="text-gray-700 mb-4">{data.description}</p>
        <div className="flex space-x-2">
          <span
            key={data.opType}
            className={`inline-block rounded-md px-3 py-1 text-sm font-semibold mr-2 ${
              data.opType === "inPerson"
                ? "text-blue-700 bg-blue-100"
                : "text-orange-600 bg-orange-200"
            }`}
          >
            {data.opType === "inPerson" ? "In Person" : "Remote"}
          </span>

          {data.categories.map((tag: string, index: number) => (
            <span
              key={index}
              className={`inline-block rounded-full border bg-white px-3 py-1 text-sm font-semibold mr-2 ${
                index === 0
                  ? "text-yellow-600 border-yellow-600"
                  : "text-violet-600 border-violet-600"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default OpportunityCard;
