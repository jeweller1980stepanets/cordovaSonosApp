//
//  SonosDiscover.h
//  HelloCordova
//
//  Created by User on 12.01.17.
//
//

#import <Foundation/Foundation.h>
#import "GCDAsyncUdpSocket.h"

@interface SonosDiscover : NSObject <GCDAsyncUdpSocketDelegate>
+ (void)discoverControllers:(void (^)(NSArray* , NSError *))completion;

@end
