import { Popup, View } from "components";
import { ChatIcon, ChatIconO } from "components/icons";
import { useState } from "react";
import { PaperClipIcon } from "@heroicons/react/solid";

export const CommentReaction = () => {
  const [Comment, setComment] = useState(false);
  let [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <Popup
        show={isOpen}
        onClose={() => setIsOpen(false)}
        variant={"white"}
        title="Send message"
      >
        <View className="flex items-start space-x-4 py-4 ">
          <View className="min-w-0 flex-1">
            <form action="#" className="relative">
              <View className="border bg-white border-gray-300 rounded-lg shadow-sm overflow-hidden ">
                <label htmlFor="comment" className="sr-only">
                  Add your comment
                </label>
                <textarea
                  rows={3}
                  name="comment"
                  id="comment"
                  className="block w-full py-3 border-0 resize-none focus:ring-0 sm:text-sm"
                  placeholder="Add your comment..."
                  defaultValue={""}
                />

                {/* Spacer element to match the height of the toolbar */}
                <View className="py-2" aria-hidden="true">
                  {/* Matches height of button in toolbar (1px border + 36px content height) */}
                  <View className="py-px">
                    <View className="h-9" />
                  </View>
                </View>
              </View>

              <View className="absolute bottom-0 inset-x-0 pl-3 pr-2 py-2 flex justify-between">
                <View className="flex items-center space-x-5">
                  <View className="flex items-center">
                    <button
                      type="button"
                      className="-m-2.5 w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-500"
                    >
                      <PaperClipIcon className="h-5 w-5" aria-hidden="true" />
                      <span className="sr-only">Attach a file</span>
                    </button>
                  </View>
                </View>
                <View className="flex-shrink-0">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-c2 hover:bg-c1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Post
                  </button>
                </View>
              </View>
            </form>
          </View>
        </View>
      </Popup>
      {Comment ? (
        <View className="text-[#3d2f5b]" onClick={() => setComment(!Comment)}>
          <ChatIcon className="-ml-0.5 h-6 w-6" />
        </View>
      ) : (
        <View
          onClick={() => {
            setComment(!Comment);
            setIsOpen(true);
          }}
        >
          <ChatIconO className="-ml-0.5 h-6 w-6" />
        </View>
      )}
    </View>
  );
};
