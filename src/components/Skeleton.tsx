import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const NewsCardSkeleton = () => {
  return (
    <Card className="border-teal-100">
      <CardHeader className="pb-3">
        <div className="flex items-center mb-2">
          <div className="skeleton w-4 h-4 rounded mr-2" />
          <div className="skeleton skeleton-text w-20" />
        </div>
        <div className="skeleton skeleton-text-lg w-full mb-2" />
        <div className="skeleton skeleton-text w-3/4" />
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mb-4">
          <div className="skeleton skeleton-text w-full" />
          <div className="skeleton skeleton-text w-full" />
          <div className="skeleton skeleton-text w-2/3" />
        </div>
        <div className="skeleton skeleton-button w-32" />
      </CardContent>
    </Card>
  );
};

export const TeamCardSkeleton = () => {
  return (
    <Card className="hover:shadow-lg transition-shadow flex flex-col">
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="text-center flex-grow flex flex-col">
          <div className="w-32 h-32 mx-auto mb-4 skeleton skeleton-avatar border-4 border-teal-100" />
          
          <div className="skeleton skeleton-text-lg w-3/4 mx-auto mb-2" />
          
          <div className="skeleton skeleton-text w-2/3 mx-auto mb-3" />
          
          <div className="space-y-2 mb-4 flex-grow">
            <div className="skeleton skeleton-text w-full" />
            <div className="skeleton skeleton-text w-full" />
            <div className="skeleton skeleton-text w-3/4 mx-auto" />
          </div>
          
          <div className="flex justify-center space-x-3 mb-4">
            <div className="skeleton w-8 h-8 rounded" />
            <div className="skeleton w-8 h-8 rounded" />
          </div>
          
          <div className="skeleton skeleton-button w-full mt-auto" />
        </div>
      </CardContent>
    </Card>
  );
};

export const PipelineImageSkeleton = () => {
  return (
    <div className="w-full h-96 bg-gray-200 rounded-xl shadow-lg" />
  );
};