def assignUser(self,validated_data):
    username = self.context['request'].user.username
    validated_data["updated_by"] = username
    validated_data["created_by"] = username