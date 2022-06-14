import { View, Col, Link, Row, AvatarStatus } from "components";
import { DoubleCheckIcon } from "components/icons";

export const ChatItem = (post: any) => {
  return (
    <Link href={"/conversation/conversation"}>
      <View key={post.id} className="py-4">
        <View className="flex space-x-3 items-center">
          {/* <View className="flex-shrink-0 inline-block relative items-center">
            <Image
              className="rounded-full"
              src={post.imageUrl}
              alt=""
              width={55}
              height={55}
            />
            <span
              className={classNames(
                post.status === "online" ? "bg-green-400" : "bg-gray-300",
                "absolute top-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white"
              )}
              aria-hidden="true"
            />
          </View> */}
          <AvatarStatus
            status={true}
            src={post.imageUrl}
            width={"w-14"}
            height={"w-14"}
          />
          <Col className="space-y-1 w-full">
            <Row className="flex items-center justify-between">
              <h3 className="text-md font-bold">{post.name}</h3>
              <p className="text-sm text-gray-500">{post.time}</p>
            </Row>
            <Row className="flex items-center justify-between">
              <Col className="flex-grow items-start py-1">
                <p className="max-w-[220px] flex-grow overflow-hidden text-ellipsis whitespace-nowrap text-sm text-gray-400">
                  {post.message}
                </p>
              </Col>
              <View className="text-sm text-gray-400 flex items-end">
                <DoubleCheckIcon />
              </View>
            </Row>
          </Col>
        </View>
      </View>
    </Link>
  );
};
