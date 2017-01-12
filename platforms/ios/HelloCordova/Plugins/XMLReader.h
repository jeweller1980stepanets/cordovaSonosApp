//
//  XMLReader.h
//  HelloCordova
//
//  Created by User on 12.01.17.
//
//

#import <Foundation/Foundation.h>

typedef NS_ENUM(NSInteger, XMLReaderOptions) {
    // Specifies whether the receiver reports the namespace and the qualified name of an element.
    XMLReaderOptionsProcessNamespaces,
    // Specifies whether the receiver reports the scope of namespace declarations.
    XMLReaderOptionsReportNamespacePrefixes,
    // Specifies whether the receiver reports declarations of external entities.
    XMLReaderOptionsResolveExternalEntities,
};

@interface XMLReader : NSObject <NSXMLParserDelegate>

+ (NSDictionary *)dictionaryForXMLData:(NSData *)data error:(NSError **)errorPointer;
+ (NSDictionary *)dictionaryForXMLString:(NSString *)string error:(NSError **)errorPointer;
+ (NSDictionary *)dictionaryForXMLData:(NSData *)data options:(XMLReaderOptions)options error:(NSError **)errorPointer;
+ (NSDictionary *)dictionaryForXMLString:(NSString *)string options:(XMLReaderOptions)options error:(NSError **)errorPointer;

@end
