import { Icon } from "@iconify/react";

export default function DefaultPagination({
  currentState,
  nextState,
  handleState,
}) {
  return (
    <div className="flex items-center gap-4">
      {currentState > 1 ? (
        <button
          onClick={() => handleState(currentState - 1)}
          className="flex items-center gap-2 border-2 rounded-lg border-gray-400"
        >
          <Icon
            className="text-3xl"
            icon="akar-icons:chevron-left-small"
            strokeWidth={2}
          />
        </button>
      ) : (
        <button className="flex items-center gap-2 border-2 rounded-lg border-gray-300">
          <Icon
            className="text-3xl text-gray-300"
            icon="akar-icons:chevron-left-small"
            strokeWidth={2}
          />
        </button>
      )}
      <p>
        Page <strong>{currentState}</strong> of{" "}
        <strong>{nextState > 0 ? nextState : currentState}</strong>
      </p>
      {nextState !== 0 ? (
        <button
          onClick={() => handleState(currentState + 1)}
          className="flex items-center gap-2 border-2 rounded-lg border-gray-400"
        >
          <Icon
            className="text-3xl"
            icon="akar-icons:chevron-right-small"
            strokeWidth={2}
          />
        </button>
      ) : (
        <button className="flex items-center gap-2 border-2 rounded-lg border-gray-300">
          <Icon
            className="text-3xl text-gray-300"
            icon="akar-icons:chevron-right-small"
            strokeWidth={2}
          />
        </button>
      )}
    </div>
  );
}
