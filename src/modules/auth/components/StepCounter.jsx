import ProgressElement from "@/components/ProgressElement";

const StepCounter = ({ count, stepDescription }) => {
  return (
    <div>
      <p className="text-xl font-bold">Step: {count}</p>
      <p>{stepDescription}</p>
      <div className="flex items-center gap-2 mt-3">
        <ProgressElement
          value={count == 1 || count > 1 ? 100 : 0}
          disableAnimation={true}
          color="success"
        />
        <ProgressElement
          value={count == 2 || count > 2 ? 100 : 0}
          disableAnimation={true}
          color="success"
        />
        <ProgressElement
          value={count == 3 ? 100 : 0}
          disableAnimation={true}
          color="success"
        />
      </div>
    </div>
  );
};

export default StepCounter;
