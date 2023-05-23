import React from "react";

const FeedBackForm = () => {
  return (
    <div className="container mx-auto">
      <a
        href="#"
        class="block  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <form>
          <h4 className="text-center mb-4 text-xl">Değerlendirme</h4>
          <div class="flex justify-center items-center mb-5">
            <Rate allowHalf defaultValue={2.5} />
          </div>
          <div class="mb-4 text-center">
            <label class="block font-bold mb-2" for="feedback">
              Feedback
            </label>
            <textarea
              class="w-1/2 px-3 py-2 border border-gray-300 rounded-md"
              id="feedback"
              name="feedback"
              rows="5"
            ></textarea>
          </div>
          <div class="flex justify-end">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </a>
    </div>
  );
};

export default FeedBackForm;
