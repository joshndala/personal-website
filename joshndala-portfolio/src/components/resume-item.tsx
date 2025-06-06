import { Card, Typography } from "@material-tailwind/react";

interface ResumeItemProps {
  icon: React.ElementType;
  children: React.ReactNode;
}

export function ResumeItem({ icon: Icon, children }: ResumeItemProps) {
  return (
    <div className="flex items-start gap-4">
      <Card
        className="h-12 w-12 shrink-0 items-center bg-primary dark:bg-secondary text-secondary dark:text-primary justify-center !rounded-lg transition-colors duration-300"
      >
        <Icon className="h-6 w-6" strokeWidth={2} />
      </Card>
      <Typography className="w-full font-normal text-primary dark:text-secondary">
        {children}
      </Typography>
    </div>
  );
}

export default ResumeItem;
